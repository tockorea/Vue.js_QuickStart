<template>
  <div id="app">
    <div class="container">
      <div class="form-group">
        <button @click="fethContacts">페이지 연락처 조회</button>
      </div>
      <div class="form-group">
        <input v-model="name" type="text" placeholder="이름을 입력합니다." />
        <input v-model="tel" type="text" placeholder="전화번호를 입력합니다." />
        <input v-model="address" type="text" placeholder="주소를 입력합니다." />
        <button @click="addContact">연락처 1건 추가</button>
      </div>
      <div class="form-group">
        <input v-model="no" type="text" />
        <button @click="fethContactOne">연락처 1건 조회</button>
      </div>
      <div class="form-group">
        <input v-model="no" type="text" />
        <input v-model="name" type="text" placeholder="이름을 입력합니다." />
        <input v-model="tel" type="text" placeholder="전화번호를 입력합니다." />
        <input v-model="address" type="text" placeholder="주소를 입력합니다." />
        <button @click="updateContact">수정</button>
      </div>
      <div class="form-group">
        <input v-model="no" type="text" />
        <button @click="deleteContact">삭제</button>
      </div>
      <div class="form-group">
        <input v-model="no" type="text" />
        <input type="file" ref="photofile" name="photo" />
        <button @click="changePhoto">파일 변경</button>
      </div>
    </div>
    <span>JSON 출력</span>
    <div id="result" class="container">
      <xmp>{{ result }}</xmp>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      no: 0,
      name: "",
      tel: "",
      address: "",
      result: null
    };
  },
  methods: {
    fethContacts() {
      // axios({
      //   method: "GET",
      //   url: "/api/contacts",
      //   params: { pageno: 1, pagesize: 5 }
      // })
      this.$axios
        .get("/api/contacts", {
          params: { pageno: 1, pagesize: 5 }
        })
        .then(response => {
          console.log(response);
          this.result = response.data;
        })
        .catch(ex => {
          console.log("ERROR!!! : ", ex);
        });
    },
    addContact() {
      this.$axios
        .post("/api/contacts", {
          name: this.name,
          tel: this.tel,
          address: this.address
        })
        .then(response => {
          console.log(response);
          this.result = response.data;
          this.no = response.data.no;
        })
        .catch(ex => {
          console.log("ERROR!!! : ", ex);
        });
    },
    fethContactOne() {
      this.$axios
        .get("/api/contacts/" + this.no)
        .then(response => {
          console.log(response);
          this.result = response.data;
        })
        .catch(ex => {
          console.log("ERROR!!! : ", ex);
        });
    },
    updateContact() {
      this.$axios
        .put("/api/contacts/" + this.no, {
          name: this.name,
          tel: this.tel,
          address: this.address
        })
        .then(response => {
          console.log(response);
          this.name = "";
          this.tel = "";
          this.address = "";
          this.result = response.data;
        })
        .catch(ex => {
          console.log("ERROR!!! : ", ex);
        });
    },
    deleteContact() {
      this.$axios
        .delete("/api/contacts/" + this.no)
        .then(response => {
          console.log(response);
          this.no = 0;
          this.result = response.data;
        })
        .catch(ex => {
          console.log("ERROR!!! : ", ex);
        });
    },
    changePhoto() {
      var data = new FormData();
      var file = this.$ref.photofile.files[0];
      data.append("photo", file);

      this.$axios
        .post("/api/contacts/" + this.no + "/photo", data)
        .then(response => {
          console.log(response);
          this.result = response.data;
        })
        .catch(ex => {
          console.log("updatePhoto failed : ", ex);
        });
    }
  }
};
</script>

<style scoped>
@import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  border: solid 1px gray;
  padding: 10px;
  margin-bottom: 10px;
  text-align: left;
}
#result {
  text-align: left;
  padding: 20px;
  border: solid 1px black;
}
.form-group {
  border: dashed 1px gray;
  padding: 5px 5px 5px 20px;
}
</style>