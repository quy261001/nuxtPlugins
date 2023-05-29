<template>
    <div>
     <h1>useCookie</h1>
     <h1>Counter: {{ counter || '-' }}</h1>
    <button @click="counter = null">reset</button>
    <button @click="counter--">-</button>
    <button @click="counter++">+</button>
    </div>
</template>
<script lang="ts" setup>
  // **maxAge**
    // const counter: any = useCookie('counter', {maxAge: 3}) // Thời gian tồn tại của Cookie này là 3 giây

  //**expires**
    // const expirationDate = new Date();
    // expirationDate.setTime(expirationDate.getTime() + 1000); // Expires after 3 seconds
    // const counter = useCookie('counter', { expires: expirationDate}); // Nếu dùng cả maxAge và expires thì maxAge sẽ được ưu tiên

  //**httpOnly** true ngăn chăn việc truy cập và lấy dữ liệu cookie từ client
    // const counter = useCookie('counter', {
    //   secure: true
    // });

counter.value = counter.value || Math.round(Math.random() * 1000);
    
</script>