<template>
  <div>
    <p>
      이름: <input v-model.trim="name" type="text" placeholder="두글자 이상 입력후 엔터!" @keyup.enter="keyupEvent" />
    </p>
    <div>
      <div> 최근 검색이름 리스트 : </div>
      <div class="box">
        <div class="item" v-for="keyword in keywordlist" :key="keyword.id">{{keyword}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Constant from "../constant";
import { mapState } from "vuex";

export default {
  name: "search",
  data: function() {
    return { name: "" };
  },
  computed: mapState(["keywordlist"]),
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

<style scoped>
div.box {
  width: 200px;
  height: 100px;
  overflow: auto;
  border: solid 1px #bbbbbb;
  margin: 5px 0px 5px 0px;
}
div.item {
  padding: 3px;
}
</style>