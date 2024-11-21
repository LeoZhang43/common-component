<script>
import { h } from 'vue';

export default {
  name: "DetailPageInfoContent",
  props: {
    details: {
      type: Object,
      default: () => ({})
    },
    sizes: {
      type: Object,
      default: () => ({ xs: 12, sm: 12, md: 12, lg: 8, xl: 6 })
    },
    prop: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    detailInfoList() {
      if (!this.details) return [];
      return Object.keys(this.prop).reduce((list, propKey, index) => {
        let label, value, hidden, render;
        if (typeof this.prop[propKey] === "string") {
          label = this.prop[propKey];
          value = (this.details[propKey] || "-").toString();
        } else {
          label = this.prop[propKey].label;
          hidden = this.prop[propKey].hidden;
          render = this.prop[propKey].render;
          const format = this.prop[propKey].format;
          value =
            format && typeof format === "function"
              ? (format(propKey, this.details[propKey]) || "-").toString()
              : (this.details[propKey] || "-").toString();
        }
        !hidden && list.push({ index, label, value, render });
        return list;
      }, []);
    }
  },
  render() {
    return h("div", { class: "detail-page-info-content" }, [
      this.$slots.append?.(),
      h("el-row", { props: { gutter: 16 } }, [
        this.detailInfoList.map((item) =>
          h(
            "el-col",
            {
              props: { ...this.sizes },
              class: "info-item-content",
              key: item.index
            },
            [
              h("div", { class: "info-content_label" }, item.label),
              item.value.length < 32
              ? h("div", { class: "info-content_value" }, item.value)
              : h("el-tooltip", { props: { content: item.value } }, [
                h("div", { class: "info-content_value" }, item.value)
              ]),
              item.render && item.render(h)
            ]
          )
        )
      ]),
      this.$slots.prepend?.(),
    ]);
  }
};
</script>

<style lang="scss">
.detail-page-info-content {
  box-sizing: border-box;
}
.info-item-content {
  font-size: 0.8rem;
  line-height: 32px;
  display: flex;
  align-items: center;
  color: black;
}
.info-content_value {
  flex: 1;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
}
</style>