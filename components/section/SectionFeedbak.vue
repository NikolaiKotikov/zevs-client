<script>
import Vue from 'vue'
import BlockFormVue from '../block/BlockForm.vue'
import SitePhoneVue from '../site/phone/SitePhone.vue'
import SiteMailVue from '../site/SiteMail.vue'
import SvgLogoVue from '../svg/SvgLogo.vue'
export default Vue.extend({
  name: 'SectionFeedback',
  functional: true,
  props: {
    title: { type: String, default: '' },
    form: { type: Object, default: () => ({}) },
    link: {
      type: Object,
      default: () => ({}),
    },
  },
  render(_, { parent: { $global }, props, $style }) {
    return (
      <section class={$style.el} id={props.link.sectionId}>
        <div class={[$global.container, $style.headline]}>
          <h2 class={$style.title}>
            <SvgLogoVue class={$style.logo} />
            {props.title}
          </h2>
        </div>

        <div class={[$style.formWrapper, $global.container]}>
          <BlockFormVue class={$style.form} props={props.form} />
        </div>
        <div class={$style.contacts}>
          <SitePhoneVue mod={'footer'} class={$style.phone} />
          <SiteMailVue class={$style.mail} />
        </div>
      </section>
    )
  },
})
</script>

<style module lang="scss">
.el {
  --background: #{$brand};
  --border: 20%;
  @include media('>=1800px') {
    --border: 25%;
  }
  @include media('>=2180px') {
    --border: 30%;
  }
  @include skew-bg('rtl');

  @include media('>=laptop') {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  @include media('<laptop', '>=tablet') {
    padding-bottom: 18px;
  }
  @include media('<tablet') {
    --border: 19%;
    padding-bottom: 25px;
  }
}
.headline {
  padding-top: 15px;
  padding-bottom: 15px;
  @include media('>=laptop') {
    --logo-width: 150px;
    --offset: 60px;
    margin-bottom: 12px;
  }

  @include media('<laptop', '>=tablet') {
    --logo-width: 72px;
    --offset: 15px;
  }

  @include media('<tablet') {
    --logo-width: 40px;
    --offset: 20px;
  }
}

.logo {
  position: absolute;
  background-color: white;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: var(--logo-width);
}

.title {
  position: relative;

  text-align: center;
  font-weight: $bold;
  text-transform: uppercase;
  color: $white;
  @include media('>=laptop') {
    font-size: 36px;
  }
  @include media('<laptop', '>=tablet') {
    font-size: 22px;
  }
  @include media('>=tablet') {
    padding: 0 calc(var(--logo-width) + var(--offset));
  }
  @include media('<tablet') {
    font-size: 16px;
  }
}

.formWrapper {
  @include media('>=tablet') {
    display: grid;
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    column-gap: var(--grid-gutter);
  }
}

.form {
  @include media('>=laptop') {
    grid-column: 4/-4;
    margin-bottom: 80px;
  }
  @include media('<laptop', '>=tablet') {
    grid-column: 3/-3;
    margin-bottom: 15px;
  }
  @include media('<tablet') {
    width: 100%;
    margin-bottom: 20px;
  }
}

.contacts {
  display: grid;
  margin-left: auto;
  margin-right: auto;
  max-width: max-content;
  color: $white;

  @include media('>=laptop') {
    row-gap: 30px;
    svg {
      width: 60px;
      margin-right: 30px;
    }
  }
  @include media('<laptop') {
    row-gap: 10px;
    svg {
      width: 30px;
      margin-right: 15px;
    }
  }

  a {
    &:hover {
      color: $accent;
    }
  }
}

.mail {
  @include media('>=laptop') {
    font-size: 33px;
  }
  @include media('<laptop') {
    font-size: 16px;
  }
}
</style>
