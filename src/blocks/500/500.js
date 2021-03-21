import tmpl from './505.tmpl';
import {NodeCreator} from '../../modules/NodeCreator';

new NodeCreator('#root', tmpl).createChild().insertToDom();

