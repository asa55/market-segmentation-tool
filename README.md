# market-segmentation-tool-dev

## Wondering why this repo exists?

First, a full disclosure. This repo holds code that I manually transfer to my [asa55.github.io](https://github.com/asa55/asa55.github.io) repo.

The repo you're looking at (in the main branch) defines my containerized GatsbyJS development environment. I have a simple script that builds a static site and lands the resulting files in the ```public``` folder.

I manually move the static files from the ```public``` folder of this repo over to the /market-segmentation-tool subdirectory of asa55.github.io. This workflow decision doesn't achieve the automation efficiency I'd like, but the justification as to why I chose to do things this way is discussed below.

Justification:

I'm very pleased with the development workflow. The problem is when it comes time to serve the static site via GitHub Pages, for security reasons (cross-origin stuff being disabled by GitHub and therefore out of my power to control). From the current repo, I have no problem connecting the index.html file to the asa55.github.io/market-segmentation-tool URI. The problem is that all other relative references (every other static file referenced by this index.html) lives in a place that by default the Gatsby build process doesn't expect. But even if I point to the files in this repo, I get some CORS blocking errors. If I were doing this in my asa55.github.io repo, everything would be dandy. But I don't want to do that. Why? Because asa55.github.io is its own site, with its own code. I want to maintain that separately as much as humanly possible. But I also want to leverage the fact that I have free hosting through GitHub pages. The solution I landed on was to generate my static files in this repo, then manually move them over to the asa55.github.io repo. 

Right after you first build the container:
>> cd gatsby-site
>> npm install

To develop:
>> cd gatsby-site
>> gatsby develop
    (dev server runs on localhost:8000)

To deploy:
>> npm run deploy
Copy the files from [this-repo]/gatsby-site/public/ into [asa55.github.io]/market-segmentation-tool
For more info on what I'm doing here: https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/


Note to self: recharts came with the dashboard template I pulled from the official material-ui site. If I decide not to use it, remember to ```npm uninstall recharts```