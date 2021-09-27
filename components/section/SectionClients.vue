<script>
import Vue from 'vue'
import BaseImageVue from '../base/BaseImage.vue'
import SvgLogoVue from '../svg/SvgLogo.vue'
export default Vue.extend({
  name: 'SectionClients',
  functional: true,
  props: {
    title: { type: String, default: '' },
    clients: { type: Array, default: () => [] },
    link: {
      type: Object,
      default: () => ({}),
    },
  },
  render(_, { parent: { $global }, props: { title, clients, link }, $style }) {
    return (
      <section class={$style.el} id={link.sectionId}>
        <div class={$global.container}>
          <h1 class={[$style.title]}>
            <SvgLogoVue class={$style.logo} />
            {title}
          </h1>
        </div>
        {clients?.length ? (
          <div class={$style.clientsWrap}>
            <div class={[$style.clientsContainer, $global.container]}>
              <ol class={$style.clients}>
                {clients.map((client, index) => {
                  return (
                    <li class={$style.client}>
                      <span class={$style.number}>{index + 1}</span>
                      <div class={$style.clientWrap}>
                        {client?.icon?.url ? (
                          <div class={$style.imageContainer}>
                            <BaseImageVue
                              class={$style.icon}
                              image={client.icon}
                            />
                          </div>
                        ) : null}
                        <p
                          class={$style.clientTitle}
                          domPropsInnerHTML={client.title}
                        ></p>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        ) : null}
      </section>
    )
  },
})
</script>

<style module lang="scss">
.el {
  @include media('>=laptop') {
    padding-top: 85px;
  }
  @include media('<laptop', '>=tablet') {
    padding-top: 42px;
  }
  @include media('<tablet') {
    padding-top: 15px;
  }
}
.clientsWrap {
  --background: #{$accent};
  --border: 73%;
  @include skew-bg;

  @include media('>=laptop') {
    padding-top: 25px;
    padding-bottom: 35px;
  }

  @include media('<laptop', '>=tablet') {
    padding-top: 11px;
    padding-bottom: 13px;
  }

  @include media('<tablet') {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
.clientsContainer {
  display: grid;
  @include media('>=tablet') {
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    column-gap: var(--grid-gutter);
  }
}
.clients {
  display: grid;
  row-gap: var(--grid-gutter);

  @include media('>=tablet') {
    grid-template-columns: 1fr 1fr;
    column-gap: var(--grid-gutter);
  }

  @include media('>=laptop') {
    grid-column: 3/-3;
  }
  @include media('<laptop', '>=tablet') {
    grid-column: 2/-2;
  }
}
.client {
  position: relative;
  display: grid;
}
.clientWrap {
  grid-area: 1/-1;
  align-self: center;
  text-align: center;

  place-items: center;
  display: grid;
  z-index: 1;
}
.number {
  line-height: 1em;
  font-weight: $bold;
  color: $white;
  opacity: 0.4;
  grid-area: 1/-1;

  @include media('>=laptop') {
    font-size: 320px;
  }
  @include media('<laptop', '>=tablet') {
    font-size: 153px;
  }
  @include media('<tablet') {
    font-size: 120px;
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
  color: $brand;
  @include section-title;
  @include media('>=laptop') {
    margin-bottom: 75px;
  }
  @include media('<laptop', '>=tablet') {
    margin-bottom: 37px;
  }
  @include media('<tablet') {
    font-size: 20px;
    margin-bottom: 13px;
  }
}

.clientTitle {
  @include media('>=laptop') {
    font-size: 20px;
  }
  @include media('<laptop') {
    font-size: 12px;
  }
}

.imageContainer {
  --aspect-ratio: #{math.div(206, 92)};
  display: grid;
  max-width: 205px;
  position: relative;

  @include media('>=tablet') {
    margin-bottom: 20px;
    width: 60%;
  }

  @include media('<tablet') {
    width: 40%;
    margin-bottom: 10px;
  }

  &::before {
    content: '';
    width: 100%;
    display: block;
    @include ratio;
  }

  img {
    object-fit: scale-down;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    max-width: 100%;
    height: 100%;
  }
}

.icon {
  @include media('>=laptop') {
    max-width: 205px;
  }
}
</style>
