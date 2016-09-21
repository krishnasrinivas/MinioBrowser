/*
 * Minio Browser (C) 2016 Minio, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react'
import Modal from 'react-bootstrap/lib/Modal'
import ModalBody from 'react-bootstrap/lib/ModalBody'

let ConfirmModal = ({ baseClass, text, okText, okIcon, cancelText, cancelIcon, okHandler, cancelHandler, show }) => {
    return (
        <Modal animation={false} show={show} className={baseClass}>
            <ModalBody>
                <div className="cm-text">{text}</div>
                <div className="cm-footer">
                    <button className="cmf-btn" onClick={okHandler}><i className={okIcon}></i>{okText}</button>
                    <button className="cmf-btn" onClick={cancelHandler}><i className={cancelIcon}></i>{cancelText}</button>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default ConfirmModal
