import * as React from 'react'

type VerticalLayoutProps = {
    children: JSX.Element[]
    style?: React.CSSProperties
}

export const VerticalLayout = ({ style, children }: VerticalLayoutProps) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        ...style
    }}>{children}</div>
)

type HorizontalLayoutProps = {
    children: JSX.Element[]
    style?: React.CSSProperties
}

export const HorizontalLayout = ({ style, children }: HorizontalLayoutProps) => (
    <div style={{
        display: 'flex',
        ...style
    }}>{children}</div>
)