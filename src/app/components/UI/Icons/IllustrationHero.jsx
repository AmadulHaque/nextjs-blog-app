import React from 'react'

export default function IllustrationHero() {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" width={1905} height={622}>
    <defs>
        <filter id="a" width="167.6%" height="167.6%" x="-33.8%" y="-33.8%" filterUnits="objectBoundingBox">
        <feGaussianBlur in="SourceGraphic" stdDeviation={32} />
        </filter>
        <filter id="b" width="167.6%" height="167.6%" x="-33.8%" y="-33.8%" filterUnits="objectBoundingBox">
        <feGaussianBlur in="SourceGraphic" stdDeviation={32} />
        </filter>
        <filter id="c" width="167.6%" height="167.6%" x="-33.8%" y="-33.8%" filterUnits="objectBoundingBox">
        <feGaussianBlur in="SourceGraphic" stdDeviation={32} />
        </filter>
        <filter id="d" width="167.6%" height="167.6%" x="-33.8%" y="-33.8%" filterUnits="objectBoundingBox">
        <feGaussianBlur in="SourceGraphic" stdDeviation={32} />
        </filter>
    </defs>
    <g fill="none" fillRule="evenodd" opacity=".403">
        <path fill="#2DD4BF" d="M213 654c-78.424 0-142-63.576-142-142s63.576-142 142-142 142 63.576 142 142-63.576 142-142 142Zm0-56c60.751 0 110-49.249 110-110s-49.249-110-110-110-110 49.249-110 110 49.249 110 110 110Z" filter="url(#a)" transform="translate(0 -103)" />
        <path fill="#2DD4BF" d="M1634 512c-78.424 0-142-63.576-142-142s63.576-142 142-142 142 63.576 142 142-63.576 142-142 142Zm0-56c60.751 0 110-49.249 110-110s-49.249-110-110-110-110 49.249-110 110 49.249 110 110 110Z" filter="url(#b)" transform="translate(0 -103)" />
        <path fill="#38BDF8" d="M1095 284c-78.424 0-142-63.576-142-142S1016.576 0 1095 0s142 63.576 142 142-63.576 142-142 142Zm0-56c60.751 0 110-49.249 110-110S1155.751 8 1095 8 985 57.249 985 118s49.249 110 110 110Z" filter="url(#c)" transform="translate(0 -103)" />
        <path fill="#6366F1" d="M1313 488c-78.424 0-142-63.576-142-142s63.576-142 142-142 142 63.576 142 142-63.576 142-142 142Zm0-8c60.751 0 110-49.249 110-110s-49.249-110-110-110-110 49.249-110 110 49.249 110 110 110Z" filter="url(#d)" transform="translate(0 -103)" />
    </g>
    </svg>
    </>
  )
}
