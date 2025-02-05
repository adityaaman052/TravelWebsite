// app/api/runProcess/route.js
import { exec } from 'child_process';

export async function POST(request) {
  return new Promise((resolve, reject) => {
    exec('your-command-here', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return reject(new Response('Something went wrong with the process', { status: 500 }));
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return reject(new Response('Error in the process', { status: 500 }));
      }
      // Send the standard output (stdout) back to the client
      resolve(new Response(JSON.stringify({ message: 'Process ran successfully', output: stdout }), { status: 200 }));
    });
  });
}
