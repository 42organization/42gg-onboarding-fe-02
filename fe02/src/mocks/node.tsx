import { http, HttpResponse } from 'msw';

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get(`https://example.com/party/rooms/34`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      roomId: 34,
      title: '파티이름입니다.',
      content: 'content',
      categoryId: 1,
      currentPeople: 4,
      minPeople: 2,
      maxPeople: 8,
      status: 'OPEN',
      dueDate: Date.now(),
      createDate: Date.now(),
      myNickname: 'myNickname',
      hostNickname: 'hostNickname',
      roomUsers: [
        {
          userRoomId: 1,
          nickname: 'hostNickname',
          intraId: 'siwolee',
          userImage:
            'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
          userRoomId: 2,
          nickname: 'userNickname',
          intraId: 'intraid',
          userImage:
            'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
      ],
      comments: [
        {
          commentId: 1,
          nickname: 'hostNickname',
          intraId: 'siwolee',
          isExist: true,
          content: '나는 그만 정신을 잊고 말았습니다',
          isHidden: false,
          createDate: Date.now(),
        },
        {
          commentId: 1,
          nickname: 'userNickname',
          intraId: 'intraid',
          isExist: true,
          content: '잊고(x) 잃고(o)',
          isHidden: false,
          createDate: Date.now(),
        },
        {
          commentId: 1,
          nickname: 'hostNickname',
          intraId: 'siwolee',
          isExist: true,
          content: '당신 밴',
          isHidden: false,
          createDate: Date.now(),
        },
        {
          commentId: 1,
          nickname: 'userNickname',
          intraId: 'intraid',
          isExist: true,
          content: '시룬뎅',
          isHidden: false,
          createDate: Date.now(),
        },
      ],
    });
  }),
];
