import tmpl from './500.tmpl';
import {NodeCreator} from '../../modules/NodeCreator';

new NodeCreator('#root', tmpl).createChild().insertToDom();

