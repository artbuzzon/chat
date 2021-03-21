import tmpl from './profile.tmpl';
import {NodeCreator} from '../../modules/NodeCreator';

new NodeCreator('#root', tmpl).createChild().insertToDom();

