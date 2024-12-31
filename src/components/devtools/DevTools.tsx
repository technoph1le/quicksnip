import { useEffect, useState } from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';
import { createPortal } from 'react-dom';
import { DevToolsField } from './DevToolsField';
import CodePreview from '../CodePreview';

export interface DevToolsProps {
    closeModal: () => void,
}

export const DevTools = ({ closeModal }: DevToolsProps) => {
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
                <div className='devtools-form-container'>
                    <div className='devtools-sub-container'>
                        <DevToolsField
                            key='title'
                            name='Title'
                            value={title}
                            placeholder='e.g., Hello World!'
                            setValue={(value) => setTitle(value)}
                        />
                        <DevToolsField
                            key='author'
                            name='Author'
                            value={author}
                            placeholder='e.g., dostonnabotov'
                            setValue={(value) => setAuthor(value)}
                        />
                    </div>
                    <DevToolsField
                        key='description'
                        name='Description'
                        value={description}
                        placeholder='e.g., A simple program that prints "Hello, World!" to the console.'
                        setValue={(value) => setDescription(value)}
                    />
                    <DevToolsField
                        key='tags'
                        name='Tags (separated by commas)'
                        value={tags}
                        placeholder='e.g., hello, world, program'
                        setValue={(value) => setTags(value)}
                    />
                    <div className='devtools-field'>
                        <label htmlFor="code" className='devtools-label'>Code</label>
                        <textarea
                            name='code'
                            id='code'
                            className='devtools-textarea'
                            value={code}
                            placeholder='Paste your code here...'
                            spellCheck={false}
                            onChange={(e) => setCode(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className='devtools-generated-container'>
                    <h3 className='devtools-generated-title'>Your generated snippet:</h3>
                    <CodePreview language='json' code={[generated]} height='80vh' />
                </div>
            </div>
        </div>,
        modalRoot
    );
}
