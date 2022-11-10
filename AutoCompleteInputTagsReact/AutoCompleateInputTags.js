import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './AutoCompleteInputTags.css'
const AutoCompleteInputTags = ({ suggestion = [], getSelectedTags = () => { }, ...rest }) => {
    const [autoTagsSuggestion, setAutoSuggestion] = useState([...suggestion])
    const [showAutoSuggestion, setShowAutoSuggestion] = useState(null)
    const [selectTags, setSelectTags] = useState([])
    useEffect(() => {
        getSelectedTags(selectTags)
    }, [selectTags])
    const inputTagsHandle = (event) => {
        const tag = event.target.value;
        const filterSuggestion = suggestion?.filter(t => t.toLowerCase().includes(tag?.toLowerCase()))
        setAutoSuggestion(filterSuggestion)
        if (event.key === "Enter" && Boolean(tag)) {
            event.preventDefault();
            setSelectTags([...selectTags, tag])
            event.target.value = ''
        }
    }
    useEffect(() => {
        document.body.onclick = (event) => {
            const target = event.target.getAttribute('data-inputSuggestion')
            if (!target) {
                setShowAutoSuggestion(null)
            }

        }
    }, [])

    const deleteTagsHandle = (id) => {
        const filter = selectTags?.filter((tag, index) => index !== id)
        setSelectTags(filter)
    }
    return (
        <label htmlFor="inputTags" {...rest}>

            <div id='autoCompleteMain' >

                <div className='selectTags'>
                    {
                        selectTags?.map((tag, index) => {

                            return (
                                <span key={index} className='selectTag'>
                                    <span>
                                        {tag}
                                    </span>
                                    <span onClick={() => deleteTagsHandle(index)}>
                                        &times;
                                    </span>
                                </span>
                            )
                        })
                    }
                    <div className='autoCompleteInput'>
                        <input
                            id='inputTags'
                            type="text"
                            placeholder='Search Skills '
                            autoComplete='off'
                            onKeyDown={(event) => {
                                inputTagsHandle(event)
                                setShowAutoSuggestion(true)
                            }}
                            onClick={() => setShowAutoSuggestion(true)}
                            data-inputSuggestion='true'
                        />
                        {
                            showAutoSuggestion &&

                            <div className='autoTagsSuggestion' data-inputSuggestion='true'>
                                {
                                    autoTagsSuggestion?.map((tag, index) => {
                                        return (
                                            <span
                                                data-inputSuggestion='true'
                                                onClick={() => {
                                                    setAutoSuggestion(suggestion)
                                                    document.getElementById('inputTags').value = ''
                                                    setSelectTags([...selectTags, tag])
                                                    setShowAutoSuggestion(null)
                                                }}
                                            >

                                                <span data-inputSuggestion='true'>
                                                    {tag}
                                                </span>
                                            </span>
                                        )
                                    })
                                }
                                {
                                    Boolean(autoTagsSuggestion?.length) ||
                                    <p data-inputSuggestion='true' >
                                        No match
                                    </p>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </label>
    );
};

export default AutoCompleteInputTags;