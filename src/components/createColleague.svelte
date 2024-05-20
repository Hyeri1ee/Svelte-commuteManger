<script>
    let title = "직원 등록하기"
    let name = '';
</script>

<div class ="box">
    <div class = "title">{title}</div>
    <input bind:value={name} placeholder="직원 이름"/><br>
    <span>매니저 인가요?</span>
    <input type="radio" name="manager" checked><span>&nbsp;</span>O <span>&nbsp;&nbsp;&nbsp;</span>   
    <input type="radio" name="manager" >X<br>
    <label for="date">입사 날짜:
        <input type="date"
               id="date"
               max="2077-06-20"
               min="2077-06-05"
               value="2077-06-15">
      </label>
      <label for="date">생일:
        <input type="date"
               id="date"
               max="2077-06-20"
               min="2077-06-05"
               value="2077-06-15">
      </label>
    <button class="confirm">등록</button>
</div>

<style>
    .title{
        background-color: #edcdf0;
        width: 150px;
        height: 40px;
        border : 1px black;
        border : dotted 5px;
        text-align: center;
        padding : 5px;
        margin: 10px auto;
    }
    .confirm{
        background-color: black;
        color : white;
    }
    .box{
        width: 300px;
        height: 300px;
        text-align: center;
        position: relative;
        top : 40%;
        left : 20%;
        border : 1px ;
        border-color: #E5B1EB;
        border : dotted 4px;
        border-radius : 20px;
    }
</style>