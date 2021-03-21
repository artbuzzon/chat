import tmpl from './404.tmpl';
import {NodeCreator} from '../../modules/NodeCreator';

new NodeCreator('#root', tmpl).createChild().insertToDom();

