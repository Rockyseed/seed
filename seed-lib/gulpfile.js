const build = require('@microsoft/web-library-build');
const gulp = require('gulp');
const tsOverride = require('typescript');

build.TypeScriptConfiguration.setTypescriptCompiler(tsOverride);
build.karma.isEnabled = () => false;
build.serve.taskConfig.initialPage = 'workbench/index.html';
build.initialize(gulp);
