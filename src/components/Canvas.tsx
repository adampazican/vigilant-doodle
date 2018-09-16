import * as React from 'react'

type Props = {
    height?: number
    width?: number
}

type State = {
    mouseDown: boolean
    scale: number
    rects: {
        x: number
        y: number
        color?: any
    }[][]
}

class Canvas extends React.Component<Props, State> {
    private canvasRef: any

    public constructor(props: Props){
        super(props)
        this.state = {
            mouseDown: false,
            scale: 1,
            rects: []
        }
        this.canvasRef = React.createRef()
    }

    public render(){
        const { height = 500, width = 500 } = this.props
        const { scale } = this.state
        return(
            <div id="canvas" style={{ 
                backgroundColor: '#FFF',
                height: height * scale,
                width: width * scale }}>
                <canvas ref={this.canvasRef} height={height * scale} width={width * scale}
                    onMouseDown={this.onMouseUpDown}
                    onMouseUp={this.onMouseUpDown}
                    onMouseMove={this.onMouseMove}
                    onMouseLeave={this.onMouseLeave}
                    onClick={this.onMouseClick}>
                    Your browser doesnt support canvas
                </canvas>
            </div>
        )
    }

    private onMouseUpDown = () => {
        this.setState(state => ({
                mouseDown: !state.mouseDown,
                rects: !state.mouseDown ? [...state.rects, []] : state.rects
            })
        )
    }

    private onMouseLeave = () => {
        this.setState(state => ({ mouseDown: false }))
    }

    private onMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
        const { x: canvasX, y: canvasY } = this.canvasRef.current.getBoundingClientRect()
        const { height = 500, width = 500 } = this.props
        const { pageX, pageY } = event
        const ctx = this.canvasRef.current.getContext('2d')

        if(this.state.mouseDown){
            ctx.fillRect(Math.round(pageX - canvasX), Math.round(pageY - canvasY), 10 * this.state.scale, 10 * this.state.scale)
            
            this.setState(state => ({
                rects: [...state.rects.slice(0, state.rects.length-1), [...state.rects[state.rects.length-1] || [], {
                    x: (pageX - canvasX) / (height * this.state.scale),
                    y: (pageY - canvasY) / (width * this.state.scale)
                }]
                ]
            }))
        }
    }

    private onMouseClick = async (event: React.MouseEvent<HTMLCanvasElement>) => {
        if(event.button === 1){
            await this.setState(state => ({
                scale: state.scale + .5
            }))
            this.reDraw()
        }
    }

    private reDraw(): void {
        const canvas = this.canvasRef.current
        const ctx = this.canvasRef.current.getContext('2d')
        const { scale } = this.state
        const { height = 500, width = 500 } = this.props
        
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        this.state.rects.forEach(rects => 
            rects.forEach(rect => 
                ctx.fillRect(Math.round(rect.x * height * scale), Math.round(rect.y * width * scale), 10 * scale, 10 * scale)
            )
        )
    }
}

/*const Canvas = ({ height = 500, width = 500 }: Props) => ( 
)*/

export default Canvas