export default  `
<div class="chat">
    <div class="sidebar">
        <div class="sidebar__head">
            <div class="sidebar__profile-btn">
                <p>Профиль</p>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L5 5L1 1" stroke="#999999"/>
                </svg>
            </div>
            <div class="sidebar__search-container">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.5924 10.4138C9.16047 11.8457 6.83886 11.8457 5.40694 10.4138C3.97502 8.9819 3.97502 6.6603 5.40694 5.22837C6.83886 3.79645 9.16047 3.79645 10.5924 5.22837C12.0243 6.6603 12.0243 8.9819 10.5924 10.4138ZM11.0328 11.7968C9.07255 13.2962 6.25696 13.1495 4.46413 11.3566C2.51151 9.40401 2.51151 6.23819 4.46413 4.28556C6.41675 2.33294 9.58258 2.33294 11.5352 4.28556C13.3279 6.07831 13.4747 8.89373 11.9755 10.8539L15.5423 14.4206L14.5994 15.3635L11.0328 11.7968Z"
                          fill="#999999"/>
                </svg>
                <span>Поиск</span>
            </div>
        </div>
        <div class="sidebar__chats" data-name="chats-container">
        </div>
    </div>
    <div class="dialog">
        <div class="dialog__header">
            <div class="dialog__header-mediabox">
                <div class="dialog__header-avatar"></div>
                <span class="dialog__header-username">Михаил</span>
            </div>
            <div class="dialog__header-dropdown" data-name="chat-actions">
                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E"/>
                    <circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E"/>
                    <circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E"/>
                </svg>
            </div>
        </div>
        <div class="dialog__body">
            <div class="dialog__body-date">19 июня</div>
            <div class="dialog__body-msg-container">
              <div class="dialog__body-msg dialog__body-msg-incoming">
                  <p class="dialog__body-msg-content">Lorem ipsum</p>
                  <p class="dialog__body-msg-time">12:45</p>
              </div>
            </div>
            <div class="dialog__body-msg-container">
              <div class="dialog__body-msg">
                  <p class="dialog__body-msg-content">doler sit amet</p>
                  <p class="dialog__body-msg-time">12:45</p>
              </div> 
            </div>
        </div>
        <div class="dialog__footer">
            <div class="dialog__footer-attach-btn" data-name="chat-attach-actions">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18662 12.5L13.7628 4.92389L14.7056 5.8667L7.12943 13.4428L6.18662 12.5Z" fill="#999999"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70067 15.0141L16.2768 7.43793L17.2196 8.38074L9.64348 15.9569L8.70067 15.0141Z" fill="#999999"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0433 20.3567L21.6195 12.7806L22.5623 13.7234L14.9861 21.2995L14.0433 20.3567Z" fill="#999999"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5574 22.8708L24.1335 15.2946L25.0763 16.2374L17.5002 23.8136L16.5574 22.8708Z" fill="#999999"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5574 22.8709C13.9423 25.486 9.71181 25.4954 7.10831 22.8919C4.50482 20.2884 4.51424 16.0579 7.12936 13.4428L6.18655 12.5C3.0484 15.6381 3.0371 20.7148 6.16129 23.839C9.28549 26.9632 14.3621 26.9518 17.5003 23.8137L16.5574 22.8709Z" fill="#999999"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6195 12.7806L22.5623 13.7234C25.003 11.2826 25.0118 7.3341 22.5819 4.90417C20.152 2.47424 16.2035 2.48303 13.7627 4.92381L14.7055 5.86662C16.6233 3.94887 19.7257 3.94196 21.6349 5.85119C23.5441 7.76042 23.5372 10.8628 21.6195 12.7806Z" fill="#999999"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70092 15.0144C6.95751 16.7578 6.95123 19.5782 8.68689 21.3138C10.4226 23.0495 13.2429 23.0432 14.9863 21.2998L14.0435 20.357C12.8231 21.5774 10.8489 21.5818 9.63391 20.3668C8.41894 19.1518 8.42334 17.1776 9.64373 15.9572L8.70092 15.0144Z" fill="#999999"/>
                </svg>
            </div>
            <input placeholder="Сообщение" class="dialog__footer-input">
            <div class="dialog__footer-send-btn"></div>
        </div>
    </div>
</div>

`;
