/*! For license information please see 77a1844f.bfd1cb1d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[881205],{273329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(824246),a=t(511151);const i={id:"docker",title:"Building a Docker image",sidebar_label:"Docker",description:"How to build a Backstage Docker image for deployment"},r=void 0,s={id:"deployment/docker",title:"Building a Docker image",description:"How to build a Backstage Docker image for deployment",source:"@site/../docs/deployment/docker.md",sourceDirName:"deployment",slug:"/deployment/docker",permalink:"/docs/deployment/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/deployment/docker.md",tags:[],version:"current",frontMatter:{id:"docker",title:"Building a Docker image",sidebar_label:"Docker",description:"How to build a Backstage Docker image for deployment"},sidebar:"docs",previous:{title:"Scaling",permalink:"/docs/deployment/scaling"},next:{title:"Kubernetes",permalink:"/docs/deployment/k8s"}},c={},l=[{value:"Host Build",id:"host-build",level:2},{value:"Multi-stage Build",id:"multi-stage-build",level:2},{value:"Separate Frontend",id:"separate-frontend",level:2},{value:"Troubleshooting Tips",id:"troubleshooting-tips",level:2},{value:"Community Contributed Dockerfile Alternatives",id:"community-contributed-dockerfile-alternatives",level:2},{value:"Minimal Hardened Image",id:"minimal-hardened-image",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This section describes how to build a Backstage App into a deployable Docker\nimage. It is split into three sections, first covering the host build approach,\nwhich is recommended due to its speed and more efficient and often simpler\ncaching. The second section covers a full multi-stage Docker build, and the last\nsection covers how to deploy the frontend and backend as separate images."}),"\n",(0,o.jsx)(n.p,{children:"Something that goes for all of these docker deployment strategies is that they\nare stateless, so for a production deployment you will want to set up and\nconnect to an external PostgreSQL instance where the backend plugins can store\ntheir state, rather than using SQLite."}),"\n",(0,o.jsxs)(n.p,{children:["This section assumes that an ",(0,o.jsx)(n.a,{href:"https://backstage.io/docs/getting-started/",children:"app"}),"\nhas already been created with ",(0,o.jsx)(n.code,{children:"@backstage/create-app"}),", in which the frontend is\nbundled and served from the backend. This is done using the\n",(0,o.jsx)(n.code,{children:"@backstage/plugin-app-backend"})," plugin, which also injects the frontend\nconfiguration into the app. This means that you only need to build and deploy a\nsingle container in a minimal setup of Backstage. If you wish to separate the\nserving of the frontend out from the backend, see the\n",(0,o.jsx)(n.a,{href:"#separate-frontend",children:"separate frontend"})," topic below."]}),"\n",(0,o.jsx)(n.h2,{id:"host-build",children:"Host Build"}),"\n",(0,o.jsx)(n.p,{children:"This section describes how to build a Docker image from a Backstage repo with\nmost of the build happening outside of Docker. This is almost always the faster\napproach, as the build steps tend to execute faster, and it's possible to have\nmore efficient caching of dependencies on the host, where a single change won't\nbust the entire cache."}),"\n",(0,o.jsxs)(n.p,{children:["The required steps in the host build are to install dependencies with\n",(0,o.jsx)(n.code,{children:"yarn install"}),", generate type definitions using ",(0,o.jsx)(n.code,{children:"yarn tsc"}),", and build the backend\npackage with ",(0,o.jsx)(n.code,{children:"yarn build:backend"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"In a CI workflow it might look something like this, from the root:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn install --frozen-lockfile\n\n# tsc outputs type definitions to dist-types/ in the repo root, which are then consumed by the build\nyarn tsc\n\n# Build the backend, which bundles it all up into the packages/backend/dist folder.\n# The configuration files here should match the one you use inside the Dockerfile below.\nyarn build:backend --config ../../app-config.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once the host build is complete, we are ready to build our image. The following\n",(0,o.jsx)(n.code,{children:"Dockerfile"})," is included when creating a new app with ",(0,o.jsx)(n.code,{children:"@backstage/create-app"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dockerfile",children:'FROM node:18-bookworm-slim\n\n# Install isolate-vm dependencies, these are needed by the @backstage/plugin-scaffolder-backend.\nRUN --mount=type=cache,target=/var/cache/apt,sharing=locked \\\n    --mount=type=cache,target=/var/lib/apt,sharing=locked \\\n    apt-get update && \\\n    apt-get install -y --no-install-recommends python3 g++ build-essential && \\\n    yarn config set python /usr/bin/python3\n\n# Install sqlite3 dependencies. You can skip this if you don\'t use sqlite3 in the image,\n# in which case you should also move better-sqlite3 to "devDependencies" in package.json.\nRUN --mount=type=cache,target=/var/cache/apt,sharing=locked \\\n    --mount=type=cache,target=/var/lib/apt,sharing=locked \\\n    apt-get update && \\\n    apt-get install -y --no-install-recommends libsqlite3-dev\n\n# From here on we use the least-privileged `node` user to run the backend.\nUSER node\n\n# This should create the app dir as `node`.\n# If it is instead created as `root` then the `tar` command below will\n# fail: `can\'t create directory \'packages/\': Permission denied`.\n# If this occurs, then ensure BuildKit is enabled (`DOCKER_BUILDKIT=1`)\n# so the app dir is correctly created as `node`.\nWORKDIR /app\n\n# This switches many Node.js dependencies to production mode.\nENV NODE_ENV=production\n\n# Copy repo skeleton first, to avoid unnecessary docker cache invalidation.\n# The skeleton contains the package.json of each package in the monorepo,\n# and along with yarn.lock and the root package.json, that\'s enough to run yarn install.\nCOPY --chown=node:node yarn.lock package.json packages/backend/dist/skeleton.tar.gz ./\nRUN tar xzf skeleton.tar.gz && rm skeleton.tar.gz\n\nRUN --mount=type=cache,target=/home/node/.cache/yarn,sharing=locked,uid=1000,gid=1000 \\\n    yarn install --frozen-lockfile --production --network-timeout 300000\n\n# This will include the examples, if you don\'t need these simply remove this line\nCOPY --chown=node:node examples ./examples\n\n# Then copy the rest of the backend bundle, along with any other files we might want.\nCOPY --chown=node:node packages/backend/dist/bundle.tar.gz app-config*.yaml ./\nRUN tar xzf bundle.tar.gz && rm bundle.tar.gz\n\nCMD ["node", "packages/backend", "--config", "app-config.yaml", "--config", "app-config.production.yaml"]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["For more details on how the ",(0,o.jsx)(n.code,{children:"backend:bundle"})," command and the ",(0,o.jsx)(n.code,{children:"skeleton.tar.gz"}),"\nfile works, see the\n",(0,o.jsxs)(n.a,{href:"/docs/tooling/cli/commands#backendbundle",children:[(0,o.jsx)(n.code,{children:"backend:bundle"})," command docs"]}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Dockerfile"})," is located at ",(0,o.jsx)(n.code,{children:"packages/backend/Dockerfile"}),", but needs to be\nexecuted with the root of the repo as the build context, in order to get access\nto the root ",(0,o.jsx)(n.code,{children:"yarn.lock"})," and ",(0,o.jsx)(n.code,{children:"package.json"}),", along with any other files that\nmight be needed, such as ",(0,o.jsx)(n.code,{children:".npmrc"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"@backstage/create-app"})," command adds the following ",(0,o.jsx)(n.code,{children:".dockerignore"})," in the\nroot of the repo to speed up the build by reducing build context size:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:".git\n.yarn/cache\n.yarn/install-state.gz\nnode_modules\npackages/*/src\npackages/*/node_modules\nplugins\n*.local.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["With the project built and the ",(0,o.jsx)(n.code,{children:".dockerignore"})," and ",(0,o.jsx)(n.code,{children:"Dockerfile"})," in place, we are\nnow ready to build the final image. From the root of the repo, execute the\nbuild:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker image build . -f packages/backend/Dockerfile --tag backstage\n"})}),"\n",(0,o.jsx)(n.p,{children:"To try out the image locally you can run the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"docker run -it -p 7007:7007 backstage\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You should then start to get logs in your terminal, and then you can open your\nbrowser at ",(0,o.jsx)(n.code,{children:"http://localhost:7007"})]}),"\n",(0,o.jsx)(n.h2,{id:"multi-stage-build",children:"Multi-stage Build"}),"\n",(0,o.jsx)(n.admonition,{title:"Note",type:"note",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:".dockerignore"})," is different in this setup, read on for more\ndetails."]})}),"\n",(0,o.jsx)(n.p,{children:"This section describes how to set up a multi-stage Docker build that builds the\nentire project within Docker. This is typically slower than a host build, but is\nsometimes desired because Docker in Docker is not available in the build\nenvironment, or due to other requirements."}),"\n",(0,o.jsxs)(n.p,{children:["The build is split into three different stages, where the first stage finds all\nof the ",(0,o.jsx)(n.code,{children:"package.json"})," files that are relevant for the initial install step\nenabling us to cache the initial ",(0,o.jsx)(n.code,{children:"yarn install"})," that installs all dependencies.\nThe second stage executes the build itself, and is similar to the steps we\nexecute on the host in the host build. The third and final stage then packages\nit all together into the final image, and is similar to the ",(0,o.jsx)(n.code,{children:"Dockerfile"})," of the\nhost build."]}),"\n",(0,o.jsxs)(n.p,{children:["The following ",(0,o.jsx)(n.code,{children:"Dockerfile"})," executes the multi-stage build and should be added to\nthe repo root:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dockerfile",children:'# Stage 1 - Create yarn install skeleton layer\nFROM node:18-bookworm-slim AS packages\n\nWORKDIR /app\nCOPY package.json yarn.lock ./\n\nCOPY packages packages\n\n# Comment this out if you don\'t have any internal plugins\nCOPY plugins plugins\n\nRUN find packages \\! -name "package.json" -mindepth 2 -maxdepth 2 -exec rm -rf {} \\+\n\n# Stage 2 - Install dependencies and build packages\nFROM node:18-bookworm-slim AS build\n\n# Install isolate-vm dependencies, these are needed by the @backstage/plugin-scaffolder-backend.\nRUN --mount=type=cache,target=/var/cache/apt,sharing=locked \\\n    --mount=type=cache,target=/var/lib/apt,sharing=locked \\\n    apt-get update && \\\n    apt-get install -y --no-install-recommends python3 g++ build-essential && \\\n    yarn config set python /usr/bin/python3\n\n# Install sqlite3 dependencies. You can skip this if you don\'t use sqlite3 in the image,\n# in which case you should also move better-sqlite3 to "devDependencies" in package.json.\nRUN --mount=type=cache,target=/var/cache/apt,sharing=locked \\\n    --mount=type=cache,target=/var/lib/apt,sharing=locked \\\n    apt-get update && \\\n    apt-get install -y --no-install-recommends libsqlite3-dev\n\nUSER node\nWORKDIR /app\n\nCOPY --from=packages --chown=node:node /app .\n\nRUN --mount=type=cache,target=/home/node/.cache/yarn,sharing=locked,uid=1000,gid=1000 \\\n    yarn install --frozen-lockfile --network-timeout 600000\n\nCOPY --chown=node:node . .\n\nRUN yarn tsc\nRUN yarn --cwd packages/backend build\n# If you have not yet migrated to package roles, use the following command instead:\n# RUN yarn --cwd packages/backend backstage-cli backend:bundle --build-dependencies\n\nRUN mkdir packages/backend/dist/skeleton packages/backend/dist/bundle \\\n    && tar xzf packages/backend/dist/skeleton.tar.gz -C packages/backend/dist/skeleton \\\n    && tar xzf packages/backend/dist/bundle.tar.gz -C packages/backend/dist/bundle\n\n# Stage 3 - Build the actual backend image and install production dependencies\nFROM node:18-bookworm-slim\n\n# Install isolate-vm dependencies, these are needed by the @backstage/plugin-scaffolder-backend.\nRUN --mount=type=cache,target=/var/cache/apt,sharing=locked \\\n    --mount=type=cache,target=/var/lib/apt,sharing=locked \\\n    apt-get update && \\\n    apt-get install -y --no-install-recommends python3 g++ build-essential && \\\n    yarn config set python /usr/bin/python3\n\n# Install sqlite3 dependencies. You can skip this if you don\'t use sqlite3 in the image,\n# in which case you should also move better-sqlite3 to "devDependencies" in package.json.\nRUN --mount=type=cache,target=/var/cache/apt,sharing=locked \\\n    --mount=type=cache,target=/var/lib/apt,sharing=locked \\\n    apt-get update && \\\n    apt-get install -y --no-install-recommends libsqlite3-dev\n\n# From here on we use the least-privileged `node` user to run the backend.\nUSER node\n\n# This should create the app dir as `node`.\n# If it is instead created as `root` then the `tar` command below will\n# fail: `can\'t create directory \'packages/\': Permission denied`.\n# If this occurs, then ensure BuildKit is enabled (`DOCKER_BUILDKIT=1`)\n# so the app dir is correctly created as `node`.\nWORKDIR /app\n\n# Copy the install dependencies from the build stage and context\nCOPY --from=build --chown=node:node /app/yarn.lock /app/package.json /app/packages/backend/dist/skeleton/ ./\n# Note: The skeleton bundle only includes package.json files -- if your app has\n# plugins that define a `bin` export, the bin files need to be copied as well to\n# be linked in node_modules/.bin during yarn install.\n\nRUN --mount=type=cache,target=/home/node/.cache/yarn,sharing=locked,uid=1000,gid=1000 \\\n    yarn install --frozen-lockfile --production --network-timeout 600000\n\n# Copy the built packages from the build stage\nCOPY --from=build --chown=node:node /app/packages/backend/dist/bundle/ ./\n\n# Copy any other files that we need at runtime\nCOPY --chown=node:node app-config*.yaml ./\n\n# This will include the examples, if you don\'t need these simply remove this line\nCOPY --chown=node:node examples ./examples\n\n# This switches many Node.js dependencies to production mode.\nENV NODE_ENV=production\n\nCMD ["node", "packages/backend", "--config", "app-config.yaml", "--config", "app-config.production.yaml"]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Note that a newly created Backstage app will typically not have a ",(0,o.jsx)(n.code,{children:"plugins/"}),"\nfolder, so you will want to comment that line out. This build also does not work\nin the main repo, since the ",(0,o.jsx)(n.code,{children:"backstage-cli"})," which is used for the build doesn't\nend up being properly installed."]}),"\n",(0,o.jsxs)(n.p,{children:["To speed up the build when not running in a fresh clone of the repo you should\nset up a ",(0,o.jsx)(n.code,{children:".dockerignore"}),". This one is different than the host build one, because\nwe want to have access to the source code of all packages for the build. We can\nhowever ignore any existing build output or dependencies on the host. For our\nnew ",(0,o.jsx)(n.code,{children:".dockerignore"}),", replace the contents of your existing one with this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"dist-types\nnode_modules\npackages/*/dist\npackages/*/node_modules\nplugins/*/dist\nplugins/*/node_modules\n*.local.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once you have added both the ",(0,o.jsx)(n.code,{children:"Dockerfile"})," and ",(0,o.jsx)(n.code,{children:".dockerignore"})," to the root of\nyour project, run the following to build the container under a specified tag."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"docker image build -t backstage .\n"})}),"\n",(0,o.jsx)(n.p,{children:"To try out the image locally you can run the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"docker run -it -p 7007:7007 backstage\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You should then start to get logs in your terminal, and then you can open your\nbrowser at ",(0,o.jsx)(n.code,{children:"http://localhost:7007"})]}),"\n",(0,o.jsx)(n.h2,{id:"separate-frontend",children:"Separate Frontend"}),"\n",(0,o.jsx)(n.admonition,{title:"Note",type:"note",children:(0,o.jsxs)(n.p,{children:["This is an optional step, and you will lose out on the features of the\n",(0,o.jsx)(n.code,{children:"@backstage/plugin-app-backend"})," plugin. Most notably the frontend configuration\nwill no longer be injected by the backend, you will instead need to use the\ncorrect configuration when building the frontend bundle."]})}),"\n",(0,o.jsxs)(n.p,{children:["It is sometimes desirable to serve the frontend separately from the backend,\neither from a separate image or for example a static file serving provider. The\nfirst step in doing so is to remove the ",(0,o.jsx)(n.code,{children:"app-backend"})," plugin from the backend\npackage, which is done as follows:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Delete ",(0,o.jsx)(n.code,{children:"packages/backend/src/plugins/app.ts"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Remove the following line from ",(0,o.jsx)(n.code,{children:"packages/backend/src/index.ts"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"backend.add(import('@backstage/plugin-app-backend/alpha'));\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Remove the ",(0,o.jsx)(n.code,{children:"@backstage/plugin-app-backend"})," and the app package dependency\n(e.g. ",(0,o.jsx)(n.code,{children:"app"}),") from ",(0,o.jsx)(n.code,{children:"packages/backend/package.json"}),". If you don't remove the\napp package dependency the app will still be built and bundled with the\nbackend."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Once the ",(0,o.jsx)(n.code,{children:"app-backend"})," is removed from the backend, you can use your favorite\nstatic file serving method for serving the frontend. An example of how to set up\nan NGINX image is available in the\n",(0,o.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/contrib/docker/frontend-with-nginx",children:"contrib folder in the main repo"})]}),"\n",(0,o.jsxs)(n.p,{children:["Note that if you're building a separate docker build of the frontend you\nprobably need to adjust ",(0,o.jsx)(n.code,{children:".dockerignore"})," appropriately. Most likely by making\nsure ",(0,o.jsx)(n.code,{children:"packages/app/dist"})," is not ignored."]}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting-tips",children:"Troubleshooting Tips"}),"\n",(0,o.jsx)(n.p,{children:"When building Docker images you may run into problems from time to time, there are two handy flags you can use to help:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--progress=plain"}),": this will give you a more verbose output and not fold the logs into sections. This is very useful when have an error but it just shows you the last command and possibly an exit code. Using this flag you are more likely to see where the error actually is."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--no-cache"}),": this will rebuild all the layers every time. This is helpful when you want to be sure that it's building from scratch."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Here's an example of these flags in use:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"docker image build . -f packages/backend/Dockerfile --tag backstage --progress=plain --no-cache\n"})}),"\n",(0,o.jsx)(n.h2,{id:"community-contributed-dockerfile-alternatives",children:"Community Contributed Dockerfile Alternatives"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Dockerfile"})," mentioned above located in ",(0,o.jsx)(n.code,{children:"packages/backend"})," is maintained by the maintainers of Backstage, however there are also community contributed Dockerfile alternatives located in ",(0,o.jsx)(n.code,{children:"contrib/docker"}),". The ",(0,o.jsx)(n.code,{children:"Dockerfile"}),"s in ",(0,o.jsx)(n.code,{children:"contrib/docker"})," are not maintained by the maintainers of Backstage and are not necessarily updated when the ",(0,o.jsx)(n.code,{children:"Dockerfile"})," located in ",(0,o.jsx)(n.code,{children:"packages/backend"})," is updated."]}),"\n",(0,o.jsx)(n.h3,{id:"minimal-hardened-image",children:"Minimal Hardened Image"}),"\n",(0,o.jsxs)(n.p,{children:["A contributed ",(0,o.jsx)(n.code,{children:"Dockerfile"})," exists within the directory of ",(0,o.jsx)(n.code,{children:"contrib/docker/minimal-hardened-image"})," which uses the ",(0,o.jsx)(n.a,{href:"https://github.com/wolfi-dev",children:(0,o.jsx)(n.code,{children:"wolfi-base"})})," image to reduce vulnerabilities. When this was contributed, this alternative ",(0,o.jsx)(n.code,{children:"Dockerfile"})," reduced 98.2% of vulnerabilities in the built Backstage docker image when compared with the image built from ",(0,o.jsx)(n.code,{children:"packages/backend/Dockerfile"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["To reduce maintenance, the digest of the image has been removed from the ",(0,o.jsx)(n.code,{children:"contrib/docker/minimal-hardened-image/Dockerfile"})," file. A complete example with the digest would be ",(0,o.jsx)(n.code,{children:"cgr.dev/chainguard/wolfi-base:latest@sha256:3d6dece13cdb5546cd03b20e14f9af354bc1a56ab5a7b47dca3e6c1557211fcf"})," and it is suggested to update the ",(0,o.jsx)(n.code,{children:"FROM"})," line in the ",(0,o.jsx)(n.code,{children:"Dockerfile"})," to use a digest. Please do a docker pull on the image to get the latest digest. Using the digest allows tools such as Dependabot or Renovate to know exactly which image digest is being utilized and allows for Pull Requests to be triggered when a new digest is available."]}),"\n",(0,o.jsx)(n.p,{children:"It is suggested to setup Dependabot/Renovate or a similar tool to ensure the image is kept up to date so that vulnerability fixes that have been addressed are pulled in frequently."})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},371426:(e,n,t)=>{var o=t(827378),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var o,i={},l=null,d=null;for(o in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,o)&&!c.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===i[o]&&(i[o]=n[o]);return{$$typeof:a,type:e,key:l,ref:d,props:i,_owner:s.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var t=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function b(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||f}function k(){}function y(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=b.prototype;var x=y.prototype=new k;x.constructor=y,g(x,b.prototype),x.isPureReactComponent=!0;var j=Array.isArray,w=Object.prototype.hasOwnProperty,v={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function R(e,n,o){var a,i={},r=null,s=null;if(null!=n)for(a in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(r=""+n.key),n)w.call(n,a)&&!_.hasOwnProperty(a)&&(i[a]=n[a]);var c=arguments.length-2;if(1===c)i.children=o;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===i[a]&&(i[a]=c[a]);return{$$typeof:t,type:e,key:r,ref:s,props:i,_owner:v.current}}function D(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var T=/\/+/g;function C(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function S(e,n,a,i,r){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case o:c=!0}}if(c)return r=r(c=e),e=""===i?"."+C(c,0):i,j(r)?(a="",null!=e&&(a=e.replace(T,"$&/")+"/"),S(r,n,a,"",(function(e){return e}))):null!=r&&(D(r)&&(r=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(r,a+(!r.key||c&&c.key===r.key?"":(""+r.key).replace(T,"$&/")+"/")+e)),n.push(r)),1;if(c=0,i=""===i?".":i+":",j(e))for(var l=0;l<e.length;l++){var d=i+C(s=e[l],l);c+=S(s,n,a,d,r)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(s=e.next()).done;)c+=S(s=s.value,n,a,d=i+C(s,l++),r);else if("object"===s)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function N(e,n,t){if(null==e)return e;var o=[],a=0;return S(e,o,"","",(function(e){return n.call(t,e,a++)})),o}function O(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},E={transition:null},P={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:E,ReactCurrentOwner:v};function U(){throw Error("act(...) is not supported in production builds of React.")}n.Children={map:N,forEach:function(e,n,t){N(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return N(e,(function(){n++})),n},toArray:function(e){return N(e,(function(e){return e}))||[]},only:function(e){if(!D(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=b,n.Fragment=a,n.Profiler=r,n.PureComponent=y,n.StrictMode=i,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,n.act=U,n.cloneElement=function(e,n,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=g({},e.props),i=e.key,r=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(r=n.ref,s=v.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)w.call(n,l)&&!_.hasOwnProperty(l)&&(a[l]=void 0===n[l]&&void 0!==c?c[l]:n[l])}var l=arguments.length-2;if(1===l)a.children=o;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];a.children=c}return{$$typeof:t,type:e.type,key:i,ref:r,props:a,_owner:s}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=R,n.createFactory=function(e){var n=R.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=D,n.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:O}},n.memo=function(e,n){return{$$typeof:h,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=E.transition;E.transition={};try{e()}finally{E.transition=n}},n.unstable_act=U,n.useCallback=function(e,n){return I.current.useCallback(e,n)},n.useContext=function(e){return I.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return I.current.useDeferredValue(e)},n.useEffect=function(e,n){return I.current.useEffect(e,n)},n.useId=function(){return I.current.useId()},n.useImperativeHandle=function(e,n,t){return I.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return I.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return I.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return I.current.useMemo(e,n)},n.useReducer=function(e,n,t){return I.current.useReducer(e,n,t)},n.useRef=function(e){return I.current.useRef(e)},n.useState=function(e){return I.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return I.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return I.current.useTransition()},n.version="18.3.1"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var o=t(667294);const a={},i=o.createContext(a);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);