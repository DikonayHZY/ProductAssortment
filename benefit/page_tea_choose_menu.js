page_tea_choose_menu = `
	<div style="width: 100%; height: 100%; position: fixed;">
		<div style="width: 100%; height: 20%; display: flex;"><!-- 顶部 -->
			<div style="width: 37%; height: 100%; display: flex; flex-direction: column;">
				<div style="width: 100%; height: 50%; border-bottom: 1px solid #7d7d7d;"></div>
				<div style="width: 100%; height: 50%;"></div>
			</div>
			<div style="width: 26%; min-width: 150px; height: 100%; display: flex; align-items: center; justify-content: center;">
				<img src="../resource/御茗阁2.png">
				<img src="../resource/cup.png">
			</div>
			<div style="width: 37%; height: 100%; display: flex; flex-direction: column;">
				<div style="width: 100%; height: 50%; border-bottom: 1px solid #7d7d7d;"></div>
				<div style="width: 100%; height: 50%;"></div>
			</div>
		</div>
		<div style="width: 100%; height: 80%; display: flex; flex-direction: column; align-items: center; justify-content: flex-start;"> <!-- 下半部分 -->
			<div style="width: 70%; height: 200px; display: flex; align-items: center; justify-content: center; font-size: 22px; text-align: center;">
				任务<span id="choose_task_number">1</span>：请找到商品“<span id="answer">武夷大红袍</span>”，然后点击“确定”按钮
			</div>

		
			<ul id="tea_main_menu" style="width: 634px; height: 133px; margin: 0; padding: 0; display: inline-block; list-style: none;">
				<li class="i1" id="green_tea_main">
					<a href="#" class="a1">
					</a>
				</li>
				<li class="i2" id="red_tea_main">
					<a href="#" class="a2">
					</a>
				</li>
				<li class="i2" id="qing_tea_main">
					<a href="#" class="a3">
					</a>
				</li>
				<li class="i1" id="hua_tea_main">
					<a href="#" class="a4">
					</a>
				</li>
			</ul>
			
		</div>
	</div>	
`;