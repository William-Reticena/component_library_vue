import Typography from '../components/typography/Typography.vue'

export default {
  title: 'components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'paragraph'],
      },
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right', 'justify'],
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
  },
}

const Template = (args) => ({
  components: { Typography },
  template: `<Typography v-bind="args">${args.content}</Typography>`,
  setup() {
    return { args }
  },
})

export const Default = Template.bind({})
Default.args = {
  variant: 'body1',
  align: 'justify',
  noWrap: false,
  fontShrinkRate: 0.2,
  color: '#000',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, alias! Non nihil beatae ab aliquam ratione tenetur, impedit soluta necessitatibus placeat dolor iure error at quasi possimus natus optio officiis?',
}
