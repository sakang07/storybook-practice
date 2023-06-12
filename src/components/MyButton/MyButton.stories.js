import Button from './MyButton';

export default  {
    title: 'Wanted/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    }
}

export const Primary = {
    args: {
        primary: true,
        label: 'Button'
    }
}

export const Secondary = {
    args: {
        label:'Button'
    }
}