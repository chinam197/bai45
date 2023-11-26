# redux

-quản lý state global cho js
-- redux quản lý theo tư duy reducer

- các thành phần của redux

\*Store --> Kho chứa state

- reducer --> hàm cập nhật state thông qua action
  \*action --> obj mô tả hành động từ phía UI lên reducer
- dispatch -- > gửi action từ UI lên reducer
  \*subcribe --> lắng nghe các thay đổi State trên store redux
  ==> để hiểu về subcribe , tìm hiểu observer pattern

#redux workflow

UI -- > dispatch --> Action
