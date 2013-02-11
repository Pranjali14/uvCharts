r3.effects = {};

r3.effects.bar = {};
r3.effects.bar.mouseover = function (graph, idx) {
	var config = graph.config,
		category = graph.categories[idx];

	var effect = function () {
		graph.frame.selectAll('rect.cr_' + category)
			.transition().duration(config.effects.hover)
				.style('fill', config.effects.hovercolor)
				.style('stroke', config.effects.strokecolor);
	
		graph.frame.selectAll('text.cr_' + category)
			.transition().duration(config.effects.hover)
				.style('fill', config.effects.textcolor)
				.style('opacity', 1);
	};

	graph.effects[category]['mouseover'] = effect;
	return effect;
};

r3.effects.bar.mouseout = function (graph, idx, color) {
	var config = graph.config,
		category = graph.categories[idx];
		color = color || r3.util.getColorBand(graph.config, idx);

	var effect = function () {
		graph.frame.selectAll('rect.cr_' + category)
			.transition().duration(config.effects.hover)
				.style('fill', color)
				.style('stroke', 'none');
	
		graph.frame.selectAll('text.cr_' + category)
			.transition().duration(config.effects.hover)
				.style('fill', 'none');
	};

	graph.effects[category]['mouseout'] = effect;
	return effect;
};

r3.effects.area = {};
r3.effects.area.mouseover = function (graph, idx) {
	var config = graph.config,
		category = graph.categories[idx];

	var effect = function () {
		graph.frame.selectAll('.cge_' + category).select('path.area_'+category)
		.transition().duration(config.effects.hover)
		.style('fill',config.effects.hovercolor);
	};

	graph.effects[category]['mouseover'] = effect;
	return effect;
};	

r3.effects.area.mouseout = function (graph, idx) {
	var config = graph.config,
		category = graph.categories[idx];

	var effect = function () {
		graph.frame.selectAll('.cge_'+category).select('path.area_'+category)
		.transition().duration(config.effects.hover)
		.style('fill',r3.util.getColorBand(config,idx));
	}
	
	graph.effects[category]['mouseout'] = effect;
	return effect;
};

r3.effects.line = {};
r3.effects.line.mouseover = function (graph, idx) {
	var config = graph.config,
		category = graph.categories[idx];

	var effect = function () {
		graph.frame.selectAll('.cge_' + category).selectAll('circle')
			.transition().duration(config.effects.hover)
				.style('fill', config.effects.hovercolor)
				.style('fill-opacity', 1)
				.style('stroke', config.effects.hovercolor);

		graph.frame.selectAll('.cge_' + category).select('path')
			.transition().duration(config.effects.hover)
				.style('stroke', config.effects.hovercolor);

		graph.frame.selectAll('.cge_' + category).selectAll('text')
			.transition().duration(config.effects.hover)
				.style('fill', config.effects.textcolor);
	};
	graph.effects[category]['mouseover'] = effect;

	return effect;
};	

r3.effects.line.mouseout = function (graph, idx, color) {
	var config = graph.config,
		category = graph.categories[idx],
		color = color || r3.util.getColorBand(graph.config, idx);

	var effect = function () {
		graph.frame.selectAll('.cge_' + category).selectAll('circle')
			.transition().duration(config.effects.hover)
				.style('fill', color)
				.style('fill-opacity', 0.6)
				.style('stroke', color);

		graph.frame.selectAll('.cge_' + category).select('path')
			.transition().duration(config.effects.hover)
				.style('stroke', color);

		graph.frame.selectAll('.cge_' + category).selectAll('text')
			.transition().duration(config.effects.hover)
				.style('fill', 'none');

	};	
	graph.effects[category]['mouseout'] = effect;
	return effect;
};

r3.effects.caption = {};
r3.effects.caption.mouseover = function (config) {
	return function () {
		d3.select(this.parentNode.parentNode).select('.' + r3.constants.name.background)
			.transition().duration(config.effects.duration)
				.style('fill', config.caption.hovercolor);
	};
};

r3.effects.caption.mouseout = function (config) {
	return function () {
		d3.select(this.parentNode.parentNode).select('.' + r3.constants.name.background)
			.transition().duration(config.effects.duration)
				.style('fill', config.graph.background);
	};
};

r3.effects.donut = {};
r3.effects.donut.mouseover = function (center, arcfunc, config, d) {
	return function (d) {
		var dev = {
				x : arcfunc.centroid(d)[0] / 5,
				y : arcfunc.centroid(d)[1] / 5
			};

		d3.select(this.parentNode)
			.transition().duration(config.effects.duration)
				.attr('transform', 'translate(' + (center.x + dev.x) + ',' + (center.y + dev.y) + ')');
	};
};

r3.effects.donut.mouseout = function (center, config) {
	return function () {
		d3.select(this.parentNode)
			.transition().duration(config.effects.duration)
				.attr('transform', 'translate(' + center.x + ',' + center.y + ')');
	};
};

r3.effects.pie = {};
r3.effects.pie.mouseover = function (center, arcfunc, config, d) {
	return function (d) {
		var dev = {
				x : arcfunc.centroid(d)[0] / 5,
				y : arcfunc.centroid(d)[1] / 5
			};

		d3.select(this.parentNode)
			.transition().duration(config.effects.duration)
				.attr('transform', 'translate(' + (center.x + dev.x) + ',' + (center.y + dev.y) + ')');
	};
};

r3.effects.pie.mouseout = function (center, config) {
	return function () {
		d3.select(this.parentNode)
			.transition().duration(config.effects.duration)
				.attr('transform', 'translate(' + center.x + ',' + center.y + ')');
	};
};

r3.effects.legend = {};
r3.effects.legend.mouseover = function (self, idx) {
	return self.effects.group[self.categories[idx]].mouseover;
};

r3.effects.legend.mouseout = function (self, idx) {
	return self.effects.group[self.categories[idx]].mouseout;
};

r3.effects.legend.click = function (i, ctx, graph) {
	var disabled = (d3.select(ctx).attr('disabled') === 'false') ? false : true;
	graph.toggleGraphGroup(i);
	d3.select(ctx).select('rect').style('fill', disabled ? r3.util.getColorBand(graph.config, i) : r3.config.legend.inactive_color);
	d3.select(ctx).select('text').style('fill', disabled ? null : r3.config.legend.inactive_color);
	d3.select(ctx).attr('disabled', disabled ? 'false' : 'true');
};
