<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
    <title>Test-newsTitle</title>
</head>

<body>
<table border="1" style="border-left-style: solid;">
    <tr>
        <td>product</td>
        <td>style</td>
        <td>name</td>
        <td>telephone_no</td>
        <td>address</td>
        <td>delivery_no</td>
    </tr>
    <c:forEach items="${requestScope.orderInfo}" var="order">
        <tr>

            <td>${order.product}</td>
            <td>${order.style}</td>
            <td>${order.name}</td>
            <td>${order.tel}</td>
            <td>${order.address}</td>
            <td>${order.delNo}</td>
        </tr>
    </c:forEach>
    <td>${test}</td>
</table>
</body>
</html>