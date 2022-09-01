# xzess CI typescript boilerplate
by Tim Koepsel / xzessmedia

A boilerplate for rapid CI development

## How to bootstrap new Project
- Bare Clone repository like this `git clone https://github.com/xzessmedia/xci-boilerplate.git --bare <projectname>`
- Create a new git repository and then push it like this `git push --mirror <your_new_repo_url_here>`
- Delete the local repository
- Clone your new copy `git clone <your_new_repo_url_here>`
- Add Upstream with `git remote add upstream https://github.com/xzessmedia/xci-boilerplate.git` and `git remote set-url --push upstream DISABLE`

## Update the latest Boilerplate
When you develop your CI App it can happen that the boilerplate has been updated
Then you want to get the latest update to your project by

```shell
git fetch upstream
git pull upstream master
```
---

## Update Submodule
Update the Submodule by ``

```shell
git submodule update --init --recursive --force –remote
```
---

## Quick Start

### 1. Installation
First install the project locally

```shell
# install deps
npm install
```
### 2. Setup Environment
- Open `.env` File and add your settings

### 3. Compile binaries for Windows, MacOS, Linux

Run Compile
``npm run compile``

---