import { exit } from 'process';
import { parseAllSnippets } from './snippetParser.js';

const [ errored ] = parseAllSnippets();

if(errored) exit(1);
