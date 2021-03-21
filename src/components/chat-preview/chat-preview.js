import {NodeCreator} from '../../modules/NodeCreator';
import tmpl from './chat-preview.tmpl';
import {chats} from '../../modules/constants';

const chatNode = new NodeCreator('[data-name="chats-container"]',
    tmpl);
chats.forEach((chat) => {
  chatNode.createChild(chat);
});
chatNode.insertToDom();
