<script>
import Vue from 'vue'
import SvgLogoVue from '../svg/SvgLogo.vue'
export default Vue.extend({
  name: 'SectionAbout',
  functional: true,
  props: {
    link: {
      type: Object,
      default: () => ({}),
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    certificateText: {
      type: String,
      default: '',
    },
  },
  render(
    _,
    {
      data,
      props: { title, content, certificateText, link },
      parent: { $global },
      $style,
    }
  ) {
    return (
      <section class={$style.el} id={link.sectionId}>
        <div class={$global.container}>
          <h1 class={[$style.title]}>
            <SvgLogoVue class={$style.logo} theme={'light'} />
            {title}
          </h1>
          <div class={$style.text}>
            <div domPropsInnerHTML={content}></div>
            <button class={$style.button}>{certificateText}</button>
          </div>
        </div>
      </section>
    )
  },
})
</script>

<style module lang="scss">
.el {
  --background: #{$brand};
  --border: 95%;
  @include skew-bg;

  overflow-x: hidden;

  color: $white;

  @include media('>=laptop') {
    padding-top: 60px;
    padding-bottom: 130px;
  }
  @include media('<laptop', '>=tablet') {
    padding-top: 23px;
    padding-bottom: 23px;
  }
  @include media('<tablet') {
    padding-top: 15px;
    padding-bottom: 15px;
  }
}

.logo {
  @include media('>=laptop') {
    width: 150px;
    margin-right: 60px;
  }

  @include media('<laptop', '>=tablet') {
    width: 72px;
    margin-right: 15px;
  }

  @include media('<tablet') {
    width: 40px;
    margin-right: 20px;
  }
}

.title {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @include section-title;
  @include media('>=laptop') {
    margin-bottom: 50px;
  }
  @include media('<laptop', '>=tablet') {
    margin-bottom: 20px;
  }
  @include media('<tablet') {
    font-size: 20px;
    margin-bottom: 13px;
  }
}

.text {
  @include media('>=laptop') {
    padding-left: 215px;
    font-size: 24px;
    max-width: 1060px;

    p {
      margin-bottom: 20px;
    }
  }
  @include media('<laptop', '>=tablet') {
    padding-left: 90px;
    font-size: 14px;
    max-width: 520px;
    p {
      margin-bottom: 16px;
    }
  }
  @include media('<tablet') {
    font-size: 12px;
    p {
      margin-bottom: 14px;
    }
  }
}

.button {
  color: $accent;
  text-decoration: underline;
}

/* Interaction */
.button {
  &:hover {
    text-decoration: none;
  }
}
</style>
