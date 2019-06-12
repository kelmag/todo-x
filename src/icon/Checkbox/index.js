import React from 'react'

export default function index({ selected }) {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.5" cy="12.5" r="11.25" stroke="#E9E9E9" strokeWidth="2.5" />
            {selected && <path d="M20 12.5C20 16.6421 16.2407 20 12.2414 20C8.24206 20 4.99999 16.6421 4.99999 12.5C4.99999 8.35786 8.75931 5 12.7586 5C16.7579 5 20 8.35786 20 12.5Z" fill="#C4C4C4" />}
        </svg>
    )
}
