# KHUHACKER 리뉴얼
> 2019년 KHUHACKER 홈페이지 리뉴얼 작업

## 개발 환경 설정
### * WiKi
   * PHP (least 7.0.13)
      * Perl Compatible Regular Expressions (PCRE)
      * session
      * spl
      * openssl
      * json
      * mbstring
      * fileinfo
   * DataBase (택 1)
      * MySQL 5.5.8 or MariaDB 5.1+
   1. PHP, DB 설치후 /wiki/LocalSetting.php 파일을 삭제한다.
   2. 브라우저에서 localhost/wiki/index.php 접속 후 database를 설정한다.
   3. 생성된 LocalSetting.php을 에디터에서 킨다.
   4. wfLoadSkin( 'CologneBlue' );
      wfLoadSkin( 'Modern' );
      wfLoadSkin( 'MonoBook' );
      wfLoadSkin( 'Vector' );       해당 줄 아래에
      
      wfLoadSkin( 'Liberty' );    를 추가해준다.
   5. $wgDefaultSkin = "vector";    를 찾아서
      $wgDefaultSkin = "liberty";    로 바꿔준다.  (대소문자 중요!)
   6. 접근은 /wiki/index.php 로 하면 된다.

## 업데이트 내역

* 0.0.1
    * 작업 진행 중

## 정보

최원섭 – whatsup@khu.ac.kr
이규호 - 2015104194@khu.ac.kr
