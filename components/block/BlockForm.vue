<script>
import Vue from 'vue'
import BlockButtonCloseVue from './BlockButtonClose.vue'
export default Vue.extend({
  name: 'BlockForm',
  props: {
    buttonTitle: { type: String, default: '' },
    successText: { type: String, default: '' },
    errorText: { type: String, default: '' },
    name: { type: Object, default: () => ({}) },
    email: { type: Object, default: () => ({}) },
    phone: { type: Object, default: () => ({}) },
    message: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      error: false,
      success: false,
      showMessage: false,
      busy: false,
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
    }
  },
  methods: {
    sendForm() {
      this.busy = true
      this.$strapi.$feedbacks
        .create(this.form)
        .then(() => {
          this.success = true
          this.clearForm()
        })
        .catch(() => {
          this.error = true
        })
        .finally(() => {
          this.busy = false
          this.showMessage = true
        })
    },
    clearForm() {
      this.form.name = ''
      this.form.email = ''
      this.form.phone = ''
      this.form.message = ''
    },
    resetForm() {
      this.error = false
      this.success = false
      this.busy = false
      this.showMessage = false
    },
    handleMessageClose() {
      this.resetForm()
    },
    renderMessage() {
      if (!this.showMessage) {
        return null
      }
      return (
        <div class={this.$style.messageBox}>
          <BlockButtonCloseVue
            vOn:click_prevent={this.resetForm}
            class={this.$style.buttonClose}
          />
          <p
            class={this.$style.messageText}
            domPropsInnerHTML={
              this.success ? this.successText : this.error ? this.errorText : ''
            }
          ></p>
        </div>
      )
    },
  },
  render(_) {
    return (
      <form vOn:submit_prevent={this.sendForm} class={this.$style.el}>
        <input
          type="text"
          required={this.name?.required}
          placeholder={this.name?.placeholder}
          vModel_trim={this.form.name}
        />
        <input
          type="email"
          required={this.email?.required}
          placeholder={this.email?.placeholder}
          vModel_trim={this.form.email}
        />
        <input
          type="text"
          required={this.phone?.required}
          placeholder={this.phone?.placeholder}
          vModel_trim={this.form.phone}
        />
        <textarea
          placeholder={this.message.placeholder}
          required={this.message.required}
          vModel_trim={this.form.message}
        />
        <transition name="fade">{this.renderMessage()}</transition>
        <button
          disabled={this.busy}
          class={this.$style.buttonSubmit}
          type="submit"
        >
          {this.buttonTitle}
        </button>
      </form>
    )
  },
})
</script>

<style module lang="scss">
.el {
  position: relative;
  background-color: $accent;
  border-radius: 10px;
  display: grid;
  box-shadow: 5px 11px 21px 0px rgba(0, 0, 0, 0.16);

  overflow: hidden;

  @include media('>=laptop') {
    padding-top: 42px;
    padding-bottom: 35px;
    padding-right: 28px;
    padding-left: 28px;

    row-gap: 30px;
  }

  @include media('<laptop') {
    padding-top: 20px;
    padding-bottom: 22px;
    padding-right: 27px;
    padding-left: 27px;

    row-gap: 15px;
  }

  input,
  textarea {
    @include media('>=laptop') {
      padding: 15px 20px;
      font-size: 14px;
    }
    @include media('<laptop') {
      padding: 4px 15px;
      font-size: 13px;
    }
    &::placeholder {
      color: #878787;
      opacity: 0.6;

      @include media('>=laptop') {
        font-size: 14px;
      }

      @include media('<laptop') {
        font-size: 13px;
      }
    }
  }

  textarea {
    resize: vertical;

    @include media('>=laptop') {
      min-height: 165px;
    }

    @include media('<laptop') {
      min-height: 85px;
    }
  }

  .buttonSubmit {
    padding-left: 35px;
    padding-right: 35px;
    border-radius: 30px;
    background: $white;
    justify-self: center;
    font-size: 14px;
    text-transform: uppercase;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.16);
    min-height: 36px;

    &:hover {
      color: $accent;
    }

    &[disabled] {
      opacity: 0.5;
      pointer-events: none;
    }
  }
}

.messageBox {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background-color: $accent;
  padding: 40px;
}

.messageText {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: $bold;
  text-align: center;
}

.buttonClose {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
