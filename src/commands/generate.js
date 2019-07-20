const { Command, flags } = require('@oclif/command')
const fs = require('fs')
// const path = require('path')

var currentPath = process.cwd();


class generateCommand extends Command {
  async run() {
    const {flags} = this.parse(generateCommand);
    const repoName = flags.reponame
    //create repo root dir
    console.log('Creating project root in:' + currentPath + '/' + repoName);
    fs.mkdirSync(currentPath + '/' + repoName, { recursive: true });
    //create modules folders & rest of the structure
    //pages + partials
    fs.mkdirSync(currentPath + '/' + repoName + '/modules' + '/ROOT' + '/pages' + '/_partials', { recursive: true });
    //assets + images
    fs.mkdirSync(currentPath + '/' + repoName + '/modules' + '/ROOT' + '/assets' + '/images', { recursive: true });
    // Copy template files
    // YML files

    var templates = './src/templates'
    const sourcePaths = [templates, templates, templates + '/modules/ROOT', templates + '/modules/ROOT/assets/images', templates + '/modules/ROOT/pages', templates + '/modules/ROOT/pages/_partials'];
    const files = ['/antora.yml', '/playbook.yml', '/nav.adoc', '/asciidoc.jpg', '/index.adoc', '/partial.adoc'];
    const destination = currentPath + '/' + repoName
    const destPaths = [destination, destination, destination + '/modules/ROOT', destination + '/modules/ROOT/assets/images', destination + '/modules/ROOT/pages', destination + '/modules/ROOT/pages/_partials'];
    sourcePaths.forEach(function (item, index) {
      console.log("Copying source file: " + item + files[index]);
      console.log("to: " + destPaths[index] + files[index]);
      fs.copyFileSync(item + files[index], destPaths[index] + files[index]);
    });

  }
}

generateCommand.description = `Generates the Antora Structure`

generateCommand.flags = {
  reponame: flags.string({char: 'n', description: 'Name of the repository'}),
}

module.exports = generateCommand
