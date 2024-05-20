<script>
    let title = "팀 등록하기"
    let teamName = '';
</script>

<div class ="box">
    <div class = "title">{title}</div>
    <input bind:value={teamName} placeholder="팀 이름"/>
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
        height: 200px;
        text-align: center;
        position: relative;
        top : 30%;
        left : 20%;
        border : 1px ;
        border-color: #E5B1EB;
        border : dotted 4px;
        border-radius: 20px;
    }
</style>