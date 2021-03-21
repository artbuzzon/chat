import {NodeCreator} from '../../modules/NodeCreator';
import tmpl from './create-user-modal.tmpl';

new NodeCreator('#root',
    tmpl).createChild().insertToDom();

