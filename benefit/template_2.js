template_2 = `
	<div style="width: 100%; height: 100%; position: fixed;">
		<div style="width: 100%; height: 25%; display: flex; align-items: center; justify-content: center;"><!-- 题目说明 -->
			<div style="width: 80%; height: 100%; display: flex; align-items: center; justify-content: flex-start; font-size: 24px;"> 请回忆刚才浏览的页面，判断下列描述的对错</div>			
		</div>

		<div style="width: 100%; height: 55%; display: flex; flex-direction: column; align-items: center; justify-content: center;"><!-- 题目部分 -->
			<div style="width: 80%; height: 30%; display: flex; align-items: flex-end; justify-content: center; font-size: 26px; line-height: 1.5;" id="content">红茶是绿茶吗？</div>
			<div style="width: 100%; height: 30%; display: flex; flex-direction: column; align-items: center; justify-content: flex-start;"> 
				<div style="width: 100%; height: 50%; min-height: 80px; display: flex; align-items: center; justify-content: center;">
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
 						<input name="one_choice" type="radio" id="choice_1" value="0">
 						<label for="choice_1"><p id="left">是</p></label>						
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
 						<input name="one_choice" type="radio" id="choice_2" value="1">
 						<label for="choice_2"><p id="right">否</p></label>						
					</div>
				</div>
			</div>
		</div>
		<div style="width: 100%; height: 20%; display: flex; align-items: center; justify-content: center;">
			<a id="next_page" href="#" style="width: 160px; height: 40px; border: 2px solid black; text-align: center; font-size: 26px;/*visibility: hidden*/;">下一页</a>
		</div>	
	</div>

`;