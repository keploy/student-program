const fs = require('fs');
const path = require('path');

const dir = '.lighthouseci';
const files = fs.readdirSync(dir).filter(file => file.endsWith('.report.json'));

if (files.length < 2) {
  console.error('❌ Not enough Lighthouse reports found.');
  process.exit(1);
}

let mainReport = '';
let prReport = '';

for (const file of files) {
  const json = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
  const url = json.finalUrl;

  if (url.includes('3000')) mainReport = json;
  else if (url.includes('3001')) prReport = json;
}

function extract(report) {
  return {
    performance: report.categories.performance.score * 100,
    accessibility: report.categories.accessibility.score * 100,
    bestPractices: report.categories['best-practices'].score * 100,
    seo: report.categories.seo.score * 100,
  };
}

const main = extract(mainReport);
const pr = extract(prReport);

const md = `
**🔍 Lighthouse Scores**

<table>
  <tr>
    <th>Metric</th>
    <th>⚡ PR Branch</th>
    <th>📦 Main Branch</th>
  </tr>
  <tr>
    <td>Performance</td>
    <td>${pr.performance}</td>
    <td>${main.performance}</td>
  </tr>
  <tr>
    <td>Accessibility</td>
    <td>${pr.accessibility}</td>
    <td>${main.accessibility}</td>
  </tr>
  <tr>
    <td>Best Practices</td>
    <td>${pr.bestPractices}</td>
    <td>${main.bestPractices}</td>
  </tr>
  <tr>
    <td>SEO</td>
    <td>${pr.seo}</td>
    <td>${main.seo}</td>
  </tr>
</table>
`;


fs.writeFileSync('lighthouse-comment.md', md);
console.log('✅ Comment written to lighthouse-comment.md');
