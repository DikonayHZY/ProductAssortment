page_shampoo_choose_menu = `
	<div style="width: 100%; height: 100%; position: fixed;">
		<div style="width: 100%; height: 20%; background-color: #262626; display: flex;"><!-- 顶部 -->
			<div style="width: 40%; height: 100%; display: flex; flex-direction: column;">
				<div style="width: 100%; height: 50%; border-bottom: 1px solid #7d7d7d;"></div>
				<div style="width: 100%; height: 50%;"></div>
			</div>
			<div style="width: 20%; min-width: 150px; height: 100%; display: flex; align-items: center; justify-content: center;">
				<img src="../resource/shampoo_logo.png">
			</div>
			<div style="width: 40%; height: 100%; display: flex; flex-direction: column;">
				<div style="width: 100%; height: 50%; border-bottom: 1px solid #7d7d7d;"></div>
				<div style="width: 100%; height: 50%;"></div>
			</div>
		</div>
		<div style="width: 100%; height: 80%; display: flex; flex-direction: column; justify-content: flex-start; align-items: center; background:url(../resource/1.jpg); background-size: 100% 100%; background-repeat:no-repeat;"> <!-- 下半部分 -->
			<div style="width: 100%; height: 15%; background-color: black; display: flex; align-items: center; justify-content: center; color: white; font-size: 20px;">任务<span id="choose_task_number">1</span>：请找到商品“<span id="answer">ALTERNA-PH</span>”，然后点击“确定”按钮</div>
			<div style="width: 100%; height: 70%; background-color: rgba(0,0,0,0.8); display: flex; flex-direction: column; justify-content: center;">
				<div style="width: 100%; height: 30%; display: flex; align-items: center; justify-content: center; color: white; font-size: 35px;">产品系列</div>
				<div class="shampoo_main_menu" style="width: 100%; height: 40%; display: flex; align-items: center; justify-content: center; color: white; font-size: 40px;">
					<a href="#" id="green_tea_main">栀子香</a>&emsp;<span class="line">&#124;</span>&emsp;
					<a href="#" id="red_tea_main">柠檬香</a>&emsp;<span class="line">&#124;</span>&emsp;
					<a href="#" id="qing_tea_main">玫瑰香</a>&emsp;<span class="line">&#124;</span>&emsp;
					<a href="#" id="hua_tea_main">椰子香</a></div>
				</div>
			</div>			
		</div>
	</div>	
`;