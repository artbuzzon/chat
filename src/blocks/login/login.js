import tmpl from './login.tmpl';
import {NodeCreator} from '../../modules/NodeCreator';

new NodeCreator('#root', tmpl).createChild().insertToDom();

