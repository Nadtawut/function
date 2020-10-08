<template>
  <v-card class="mx-auto">
    <v-app-bar
      dark
      color="pink"
    >
      <v-toolbar-title >Pick Function</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row dense>
        <v-col cols="6">
          <v-card
            color="#385F73"
            dark
            >
             <v-row dense>
            <v-col cols="6">
        <v-card>
    <v-img
      class="white--text"
      height="200px"
      src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/69314654_2432359723513158_2715713550747172864_n.jpg?_nc_cat=108&_nc_sid=ad2b24&_nc_ohc=2XbYpiCkie8AX8zMOpM&_nc_oc=AQl5jUTW-eAQIhP-oVzBJpMMSmr5RMAOzDpiBit0xKdTvTdbKRpFk0FXugqz7xq3ct0&_nc_ht=scontent.fbkk13-1.fna&oh=2e44f4ce9996b297551045e0082a43b1&oe=5FA34F80"
    >
      <v-card-title>อาทิตย์</v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      <div class="text-center white--text">ม้ากับลาวิ่งแข่งกัน ตัวอะไรจะชนะ??</div>
      <div class="text-center white--text">ลาชนะ เพราะว่า ลาไปก่อนนน</div>
    </v-card-text>
    </v-card>
        </v-col>  
         <v-col cols="6">
            <v-card-title class="headline red--text">
              Basic Function
            </v-card-title>
            <v-card-subtitle>- ค้นหาเพื่อนไม่จำกัด<br>- เพิ่มเพื่อนได้จำกัดต่อวัน ( ไม่เกิน 10 คน )
            <br>- เข้าดูโปรไฟล์เพื่อน จำกัดจำนวนครั้ง ที่ทำการค้นหา ( 10 ครั้ง)</v-card-subtitle>
           <v-col cols="12">
            <v-card class="text-center">
              <v-btn text block x-large @click="sub1">
                Submit
              </v-btn>
            </v-card>
            </v-col>
        </v-col>
        </v-row>
          </v-card>
        </v-col>
            <v-col cols="6">
          <v-card
            color="#385F73"
            dark
            >
             <v-row dense>
            <v-col cols="6">
         <v-card>
            
             <v-img
      class="white--text"
      height="200px"
      src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/69314654_2432359723513158_2715713550747172864_n.jpg?_nc_cat=108&_nc_sid=ad2b24&_nc_ohc=2XbYpiCkie8AX8zMOpM&_nc_oc=AQl5jUTW-eAQIhP-oVzBJpMMSmr5RMAOzDpiBit0xKdTvTdbKRpFk0FXugqz7xq3ct0&_nc_ht=scontent.fbkk13-1.fna&oh=2e44f4ce9996b297551045e0082a43b1&oe=5FA34F80"
    >
      <v-card-title v-model="name">อาทิตย์<div class="pink--text">(UP)</div></v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      
      <div class="text-center white--text">ม้ากับลาวิ่งแข่งกัน ตัวอะไรจะชนะ??</div>
      <div class="text-center white--text">ลาชนะ เพราะว่า ลาไปก่อนนน</div>
    </v-card-text>
    </v-card>
        </v-col>
        
         <v-col cols="6">
         
            <v-card-title class="headline pink--text">
              Upgrade Function
            </v-card-title>
           <v-card-subtitle>- ค้นหาเพื่อนไม่จำกัด<br>- ค้นหาแบบมีตัวเลือก เช่น อายุ เพศ <br>- เพิ่มเพื่อนได้ไม่จำกัด
            <br>- เข้าดูโปรไฟล์เพื่อนไม่จำกัด ที่ทำการค้นหา</v-card-subtitle>
           <v-col cols="12">
            <v-card class="text-center">
              <v-btn text block x-large @click="sub2">
                Submit
              </v-btn>
            </v-card>
            </v-col>
         
        </v-col>
        </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
  data: () =>({
  name:"อาทิตย์",
  submit1:"Basic Function",
  submit2:"Upgrade Function"
  }),
  methods:{
    sub1(){
      if (this.name) {
        let payload = {func1:this.submit1 , name:this.name};
        this.$store.dispatch("sub1", payload);
      }
    },
    sub2(){
      if (this.name) {
        let payload = {func1:this.submit2 , name:this.name};
        this.$store.dispatch("sub1", payload);
      }
    },
   
  }
  }
</script>
