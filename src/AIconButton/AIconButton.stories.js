import AIconButton from './';
import { AAddIcon } from '../icons';

export default { title: 'Icon Button' };

export const Default = () => ({
  components: { AIconButton, AAddIcon },
  template: `
  <div>
    <a-icon-button
      @click="handleClick"
      style="margin: 0 10px 0 0;"
    >
      <a-add-icon />
    </a-icon-button>
    <a-icon-button
      @click="handleClick"
      :is-primary="true"
    >
      <a-add-icon />
    </a-icon-button>
  </div>
  `,
  methods: {
    handleClick: () => alert('Clicked'),
  },
});

export const PlainVariant = () => ({
  components: { AIconButton, AAddIcon },
  template: `
    <div>
      <a-icon-button
        @click="handleClick"
        style="margin: 0 10px 0 0;"
        variant="plain"
      >
        <a-add-icon />
      </a-icon-button>
      <a-icon-button
        @click="handleClick"
        :is-primary="true"
        variant="plain"
      >
        <a-add-icon />
      </a-icon-button>
    </div>
  `,
  methods: {
    handleClick: () => alert('Clicked'),
  },
});

export const Disabled = () => ({
  components: { AIconButton, AAddIcon },
  template: `
    <div>
      <a-icon-button
        @click="handleClick"
        :is-disabled="true"
        style="margin: 0 10px 0 0;"
      >
        <a-add-icon />
      </a-icon-button>
      <a-icon-button
        @click="handleClick"
        :is-disabled="true"
        :is-primary="true"
      >
        <a-add-icon />
      </a-icon-button>
    </div>
  `,
  methods: {
    handleClick: () => alert('Clicked'),
  },
});

export const AsDiv = () => ({
  components: { AIconButton, AAddIcon },
  template: `
    <div>
      <a-icon-button
        @click="handleClick"
        component="div"
        style="margin: 0 10px 0 0;"
      >
        <a-add-icon />
      </a-icon-button>
      <a-icon-button
        @click="handleClick"
        component="div"
        :is-primary="true"
      >
        <a-add-icon />
      </a-icon-button>
    </div>
  `,
  methods: {
    handleClick: () => alert('Clicked'),
  },
});
