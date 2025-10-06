import { exec } from 'node:child_process';
import * as path from 'node:path';
import * as puppeteer from 'puppeteer';
import { pdfPage } from 'puppeteer-report';
console.log('脚本开始执行...');
const waitFor = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const goTo = async (page: puppeteer.Page, url: string) => {
  console.log(`正在访问: ${url}`);
  await page.goto(url, { waitUntil: 'networkidle0' });
};

type GoToReturn = ReturnType<typeof goTo>;

interface RetryOptions {
  promise: () => GoToReturn;
  retries: number;
  retryTime: number;
}

const retry = async ({ promise, retries, retryTime }: RetryOptions): GoToReturn => {
  try {
    return await promise();
  } catch (error) {
    if (retries <= 0) {
      console.error(`重试次数已用尽，最后错误: ${error}`);
      throw error;
    }
    console.log(`重试剩余次数: ${retries}, 错误: ${error}`);
    await waitFor(retryTime);

    return await retry({ promise, retries: retries - 1, retryTime });
  }
};

const main = async () => {
  const child = exec('npm run dev', (error, stdout, stderr) => {
    if (error) {
      console.error(`执行错误: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });

  // 给开发服务器一些时间启动
  console.log('启动开发服务器...');
  await waitFor(5000);

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 794, height: 1122, deviceScaleFactor: 2 });

  try {
    await retry({
      promise: () => goTo(page, 'http://localhost:3000/pdf'),
      retries: 10, // 增加重试次数
      retryTime: 2000, // 增加重试间隔
    });

    console.log('页面加载成功，开始生成PDF...');

    await pdfPage(page, {
      path: path.join(__dirname, '..', 'public', 'cv.pdf'),
      format: 'A4',
      printBackground: true,
      margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
    });

    console.log('PDF生成成功！');
  } catch (error) {
    console.error('生成PDF失败:', error);
  } finally {
    await browser.close();
    child.kill();
    console.log('浏览器已关闭，开发服务器已停止');
  }
};

main().catch(console.error);
