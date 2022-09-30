program test;
	var
		x1, y1, x2, y2, d: real;
begin
	writeln('введите A(x1, y1) и B(x2, y2)');
	readln(x1, y1, x2, y2);
	d:=sqrt(sqrt(y2-y1)+sqr(x2-x1));
	writeln('длина отрезка |AB|=',d)
end.