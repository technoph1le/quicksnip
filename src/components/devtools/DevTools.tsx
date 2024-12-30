import { useEffect, useState } from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';
import { createPortal } from 'react-dom';
import { DevToolsField } from './DevToolsField';

export interface DevToolsProps {
    closeModal: () => void,
}

export const DevTools = import.meta.env.MODE === 'production' ? () => null : (
    ({ closeModal }: DevToolsProps) => {
        const modalRoot = document.getElementById("modal-root");
        if (!modalRoot) return null;
        useEscapeKey(closeModal);

        const [ title, setTitle ] = useState('');
        const [ description, setDescription ] = useState('');
        const [ tags, setTags ] = useState('');
        const [ author, setAuthor ] = useState('');
        const [ code, setCode ] = useState('');

        const [ generated, setGenerated ] = useState('');

        const generateSnippet = () => {
            const codeArray = code.split(/\r?\n/gm);

            const tagsArray = tags
                .split(',')
                .map((tag) => tag.trim())
                .filter((tag) => tag);
            
            return {
                title: title.trim(),
                description: description.trim(),
                tags: tagsArray,
                author: author.trim(),
                code: codeArray,
            };
        };

        useEffect(() => {
            setGenerated(JSON.stringify(generateSnippet(), null, 4));
        }, [
            title, description, tags, author, code,
        ]);

        return createPortal(
            <div
                className='modal-overlay devtools'
                onClick={ (e) => {
                    if(e.target === e.currentTarget) {
                        closeModal()
                    }
                } }
            >
                <div className='modal devtools-container'>
                    <DevToolsField
                        key='title'
                        name='Title'
                        value={title}
                        setValue={(value) => setTitle(value)}
                    />
                    <DevToolsField
                        key='description'
                        name='Description'
                        value={description}
                        setValue={(value) => setDescription(value)}
                    />
                    <DevToolsField
                        key='tags'
                        name='Tags (separated by commas)'
                        value={tags}
                        setValue={(value) => setTags(value)}
                    />
                    <DevToolsField
                        key='author'
                        name='Author'
                        value={author}
                        setValue={(value) => setAuthor(value)}
                    />
                    <div className='devtools-field'>
                        <label htmlFor="code" className='devtools-label'>Code</label>
                        <textarea
                            name='code'
                            id='code'
                            className='devtools-textarea'
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        ></textarea>
                    </div>
                    <div className='devtools-generated-container'>
                        <h3 className='devtools-generated-title'>Your generated snippet:</h3>
                        <pre className='devtools-generated'>
                            <code>
                                {generated}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>,
            modalRoot
        );
    }
);
