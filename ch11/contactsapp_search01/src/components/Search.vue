<template>
  <p>
    이름: <input v-model.trim="name" type="text" placeholder="두글자 이상 입력후 엔터!" @keyup.enter="keyupEvent" />
  </p>
</template>

<script>
import Constant from "../constant";

export default {
  name: "search",
  data: function() {
    return { name: "" };
  },
  methods: {
    keyupEvent: function(e) {
      var val = e.target.value;
      if (val.length >= 2) {
        this.$store.dispatch(Constant.SEARCH_CONTACT, { name: val });
        this.name = "";
      } else {
        this.$store.dispatch(Constant.SEARCH_CONTACT, { name: "" });
      }
    }
  }
};
</script>