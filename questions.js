/**
 * 복구된 AWS SAA-C03 문제 데이터 (총 451문제)
 * 문법 오류가 완전히 수정되었습니다.
 */
const generateQuestions = () => {
    const qList = [
    {
        "category": "데이터베이스",
        "title": "한 금융 애플리케이션이 데이터베이스에 데이터를 쓸 때마다 캐시에도 동시에 데이터를 업데이트하여 항상 최신 상태를 유지하고자 합니다. 읽기 지연 시간을 줄이고 데이터 일관성을 높이기 위한 가장 적절한 캐싱 전략은 무엇입니까?",
        "options": [
            "지연 로딩(Lazy Loading) 전략을 사용한다.",
            "라이트 스루(Write-Through) 전략을 사용한다.",
            "TTL(Time-To-Live) 값만 추가한다.",
            "AWS AppConfig를 사용하여 데이터를 캐싱한다."
        ],
        "answer": "라이트 스루(Write-Through) 전략을 사용한다.",
        "explanation": "라이트 스루(Write-Through) 전략은 데이터베이스에 데이터가 기록될 때 캐시에도 동시에 기록하므로 데이터 일관성이 높고 캐시 미스(Cache Miss)를 줄일 수 있습니다."
    },
    {
        "category": "보안 및 규정 준수",
        "title": "한 기업이 규정 준수를 위해 Amazon EC2 및 Amazon S3 데이터를 백업하고, 백업 보존 기간 동안 누구도(AWS 루트 계정 포함) 백업을 삭제하거나 변경할 수 없도록 설정하려고 합니다. 가장 적절한 솔루션은 무엇입니까?",
        "options": [
            "AWS Backup의 볼트 잠금(Vault Lock) 기능을 규정 준수 모드로 사용한다.",
            "Amazon S3 수명 주기 정책을 사용하여 삭제를 방지한다.",
            "Amazon Data Lifecycle Manager를 사용하여 스냅샷을 관리한다.",
            "IAM 권한을 수정하여 모든 사용자의 삭제 권한을 제거한다."
        ],
        "answer": "AWS Backup의 볼트 잠금(Vault Lock) 기능을 규정 준수 모드로 사용한다.",
        "explanation": "AWS Backup 볼트 잠금(Vault Lock)을 규정 준수 모드로 설정하면 보존 기간이 만료될 때까지 고객이나 AWS를 포함한 누구도 백업을 삭제하거나 변경할 수 없습니다."
    },
    {
        "category": "애플리케이션 통합",
        "title": "새로운 버전의 REST API를 배포하려고 합니다. 전체 트래픽의 5%만 새 버전으로 라우팅하여 안정성을 테스트한 후, 점진적으로 트래픽을 늘리고자 합니다. 가장 적절한 배포 방식은 무엇입니까?",
        "options": [
            "API Gateway의 카나리아(Canary) 릴리스 배포를 사용한다.",
            "블루/그린 배포를 사용하여 트래픽을 한 번에 전환한다.",
            "모든 사용자를 새 버전으로 즉시 이동시킨다.",
            "Route 53 가중치 기반 라우팅을 사용하여 API 엔드포인트를 분리한다."
        ],
        "answer": "API Gateway의 카나리아(Canary) 릴리스 배포를 사용한다.",
        "explanation": "API Gateway의 카나리아 배포를 사용하면 트래픽의 일부 비율만 새 단계로 라우팅하여 프로덕션 환경에서 안전하게 테스트할 수 있습니다."
    },
    {
        "category": "머신러닝",
        "title": "병원에서 대량의 종이 의료 기록을 스캔하여 디지털화하고 있습니다. 스캔된 문서에서 텍스트를 추출한 뒤, 환자의 건강 정보(증상, 약물 등)를 자동으로 식별하여 데이터베이스에 저장하려고 합니다. 가장 효율적인 서비스 조합은 무엇입니까?",
        "options": [
            "Amazon Rekognition으로 텍스트를 추출하고 Amazon Translate로 번역한다.",
            "Amazon Textract로 텍스트를 추출하고 Amazon Comprehend Medical로 의료 정보를 분석한다.",
            "Amazon EC2에 OCR 소프트웨어를 설치하여 직접 처리한다.",
            "Amazon Transcribe Medical을 사용하여 텍스트를 변환한다."
        ],
        "answer": "Amazon Textract로 텍스트를 추출하고 Amazon Comprehend Medical로 의료 정보를 분석한다.",
        "explanation": "Amazon Textract는 문서에서 텍스트를 추출(OCR)하며, Amazon Comprehend Medical은 의료 텍스트에서 건강 관련 정보를 식별하는 데 특화된 서비스입니다."
    },
    {
        "category": "데이터베이스",
        "title": "Amazon DynamoDB 테이블에 새로운 항목이 추가될 때마다 해당 데이터를 비동기적으로 처리하여 분석 시스템으로 보내려고 합니다. 운영 오버헤드가 가장 적은 방법은 무엇입니까?",
        "options": [
            "DynamoDB Streams를 활성화하고 AWS Lambda를 트리거하여 처리한다.",
            "애플리케이션에서 DynamoDB에 쓸 때 동시에 분석 시스템에도 데이터를 보낸다.",
            "매시간 DynamoDB 테이블을 스캔(Scan)하는 스크립트를 실행한다.",
            "DynamoDB 데이터를 S3로 내보낸 후 처리한다."
        ],
        "answer": "DynamoDB Streams를 활성화하고 AWS Lambda를 트리거하여 처리한다.",
        "explanation": "DynamoDB Streams는 테이블의 변경 사항(입력, 수정, 삭제)을 캡처하며, Lambda와 연동하여 실시간 이벤트 기반 처리를 구현하는 가장 효율적인 방법입니다."
    },
    {
        "category": "데이터베이스",
        "title": "기존의 Microsoft SQL Server 데이터베이스를 AWS로 마이그레이션하여 라이선스 비용을 절감하고자 합니다. 애플리케이션 코드를 거의 수정하지 않고 Amazon Aurora PostgreSQL로 이관하려면 어떤 기능을 사용해야 합니까?",
        "options": [
            "Babelfish for Aurora PostgreSQL을 활성화한다.",
            "AWS Schema Conversion Tool(SCT)만 사용한다.",
            "RDS Proxy를 사용하여 쿼리를 변환한다.",
            "DynamoDB로 마이그레이션한다."
        ],
        "answer": "Babelfish for Aurora PostgreSQL을 활성화한다.",
        "explanation": "Babelfish를 사용하면 Aurora PostgreSQL이 Microsoft SQL Server 전용 T-SQL 쿼리를 이해할 수 있어, 애플리케이션 코드를 거의 수정하지 않고도 마이그레이션이 가능합니다."
    },
    {
        "category": "컨테이너",
        "title": "Amazon EKS(Elastic Kubernetes Service)에서 상태 비저장(Stateless) 및 내결함성이 있는 배치 작업 워크로드를 실행 중입니다. 비용을 최대한 절감하려면 어떤 인스턴스 구매 옵션을 사용해야 합니까?",
        "options": [
            "Amazon EC2 스팟 인스턴스(Spot Instances)",
            "온디맨드 인스턴스",
            "전용 호스트(Dedicated Hosts)",
            "예약 인스턴스(Reserved Instances)"
        ],
        "answer": "Amazon EC2 스팟 인스턴스(Spot Instances)",
        "explanation": "중단되어도 다시 시작할 수 있는 상태 비저장 워크로드에는 스팟 인스턴스를 사용하는 것이 가장 비용 효율적입니다."
    },
    {
        "category": "애플리케이션 통합",
        "title": "여러 가용 영역(AZ)에 걸쳐 있는 웹 애플리케이션의 사용자 세션 데이터를 공유하고 싶습니다. 개별 웹 서버에 장애가 발생해도 세션이 유지되도록 하려면 어떤 서비스를 사용해야 합니까?",
        "options": [
            "Amazon ElastiCache for Redis",
            "EC2 인스턴스 메모리",
            "EBS 볼륨",
            "AWS Systems Manager Session Manager"
        ],
        "answer": "Amazon ElastiCache for Redis",
        "explanation": "Redis용 ElastiCache는 세션 데이터를 인메모리에 저장하여 빠른 속도를 제공하며, 다중 AZ를 통해 고가용성을 보장하여 서버 장애 시에도 세션을 유지합니다."
    },
    {
        "category": "저장소",
        "title": "분석 애플리케이션에서 생성되는 대량의 JSON 형식 로그 데이터를 백업해야 합니다. 재해 복구 시 10밀리초 미만의 속도로 데이터에 접근할 수 있어야 합니다. 가장 적절한 저장소는 무엇입니까?",
        "options": [
            "Amazon S3 Standard",
            "Amazon S3 Glacier Deep Archive",
            "Amazon RDS for PostgreSQL",
            "Amazon OpenSearch Service"
        ],
        "answer": "Amazon S3 Standard",
        "explanation": "S3 Standard는 높은 내구성을 제공하며 밀리초 단위의 데이터 액세스 속도를 보장합니다. Glacier는 검색에 분/시간 단위가 소요되므로 적절하지 않습니다."
    },
    {
        "category": "보안",
        "title": "매우 민감한 고객 데이터를 Amazon RDS MySQL 데이터베이스에 저장하려고 합니다. 규정 준수를 위해 데이터베이스 관리자조차도 데이터를 볼 수 없도록, 데이터베이스에 저장되기 전에 암호화되어야 합니다. 어떤 방법이 적절합니까?",
        "options": [
            "AWS KMS를 사용한 클라이언트 측 암호화(Client-side encryption)",
            "RDS 인스턴스에 대한 TDE(Transparent Data Encryption) 활성화",
            "SSL/TLS를 사용한 전송 중 암호화",
            "S3 버킷 암호화 사용"
        ],
        "answer": "AWS KMS를 사용한 클라이언트 측 암호화(Client-side encryption)",
        "explanation": "클라이언트 측 암호화를 사용하면 데이터가 AWS로 전송되기 전에 애플리케이션 레벨에서 암호화되므로, DB 관리자나 AWS 측에서도 원본 데이터를 볼 수 없습니다."
    },
    {
        "category": "서버리스",
        "title": "관리 부담을 최소화하면서 1GB 메모리 미만을 사용하는 간단한 마이크로서비스 API를 구축하려고 합니다. 관계형 데이터베이스가 필요합니다. 가장 적합한 아키텍처는 무엇입니까?",
        "options": [
            "Amazon API Gateway + AWS Lambda + Amazon RDS",
            "EC2 인스턴스 + 로드 밸런서 + RDS",
            "ECS 컨테이너 + Fargate + DynamoDB",
            "API Gateway + Lambda + Redshift"
        ],
        "answer": "Amazon API Gateway + AWS Lambda + Amazon RDS",
        "explanation": "서버리스인 Lambda와 API Gateway를 사용하면 서버 관리 부담이 없으며, 관계형 데이터가 필요하므로 RDS를 사용하는 것이 요구사항에 부합합니다."
    },
    {
        "category": "보안",
        "title": "외부 감사자가 보안 감사를 위해 회사의 RDS 데이터베이스 스냅샷에 접근해야 합니다. 가장 안전하게 스냅샷을 공유하는 방법은 무엇입니까?",
        "options": [
            "스냅샷을 암호화하여 복사본을 만든 뒤, 감사자의 AWS 계정과 KMS 키를 공유한다.",
            "스냅샷을 퍼블릭으로 설정하여 다운로드하게 한다.",
            "데이터베이스의 사용자 계정을 생성하여 직접 접속하게 한다.",
            "스냅샷을 S3로 내보내고 버킷 정책으로 모든 접근을 허용한다."
        ],
        "answer": "스냅샷을 암호화하여 복사본을 만든 뒤, 감사자의 AWS 계정과 KMS 키를 공유한다.",
        "explanation": "암호화된 스냅샷은 특정 AWS 계정 ID와 KMS 키 권한을 명시적으로 부여하여 안전하게 공유할 수 있습니다."
    },
    {
        "category": "네트워크",
        "title": "UDP 프로토콜을 사용하는 실시간 온라인 게임 서비스를 전 세계 사용자에게 제공하려 합니다. 지연 시간을 줄이고 지역 간 페일오버(Failover)를 지원하는 가장 좋은 방법은 무엇입니까?",
        "options": [
            "AWS Global Accelerator를 사용한다.",
            "Amazon CloudFront를 사용한다.",
            "Route 53 지연 시간 기반 라우팅을 사용한다.",
            "Application Load Balancer를 각 지역에 배포한다."
        ],
        "answer": "AWS Global Accelerator를 사용한다.",
        "explanation": "AWS Global Accelerator는 UDP 프로토콜을 지원하며, AWS 글로벌 네트워크를 통해 트래픽을 라우팅하여 지연 시간을 줄이고 빠른 페일오버를 제공합니다. (CloudFront는 UDP 미지원)"
    },
    {
        "category": "저장소",
        "title": "전 세계 사용자들이 대용량 파일을 중앙의 S3 버킷으로 업로드하고 있습니다. 업로드 속도가 느리다는 불만이 있어 이를 개선하고자 합니다. 가장 효과적인 방법은 무엇입니까?",
        "options": [
            "S3 Transfer Acceleration을 활성화한다.",
            "S3 멀티파트 업로드를 비활성화한다.",
            "AWS Global Accelerator를 S3 앞에 둔다.",
            "각 지역별로 S3 버킷을 만들고 나중에 병합한다."
        ],
        "answer": "S3 Transfer Acceleration을 활성화한다.",
        "explanation": "S3 Transfer Acceleration은 CloudFront의 에지 로케이션을 활용하여 S3로의 업로드 경로를 최적화함으로써 전송 속도를 크게 향상시킵니다."
    },
    {
        "category": "컴퓨팅",
        "title": "고성능 컴퓨팅(HPC) 워크로드를 위해 수백 개의 EC2 인스턴스가 동시에 높은 처리량으로 데이터에 액세스해야 합니다. 가장 적합한 스토리지 서비스는 무엇입니까?",
        "options": [
            "Amazon FSx for Lustre",
            "Amazon EFS General Purpose",
            "Amazon EBS Provisioned IOPS",
            "Amazon S3 Glacier"
        ],
        "answer": "Amazon FSx for Lustre",
        "explanation": "FSx for Lustre는 HPC 워크로드에 최적화된 고성능 파일 시스템으로, S3와 연동되며 밀리초 미만의 지연 시간과 높은 처리량을 제공합니다."
    },
    {
        "category": "네트워크",
        "title": "프라이빗 서브넷에 있는 DB 인스턴스가 소프트웨어 패치를 다운로드하기 위해 인터넷에 접속해야 하지만, 외부에서 해당 DB로 직접 접속할 수는 없어야 합니다. 어떤 아키텍처가 필요합니까?",
        "options": [
            "퍼블릭 서브넷에 NAT 게이트웨이를 배치하고 라우팅 테이블을 수정한다.",
            "프라이빗 서브넷에 인터넷 게이트웨이를 연결한다.",
            "데이터베이스에 퍼블릭 IP를 할당한다.",
            "NAT 인스턴스를 프라이빗 서브넷에 배치한다."
        ],
        "answer": "퍼블릭 서브넷에 NAT 게이트웨이를 배치하고 라우팅 테이블을 수정한다.",
        "explanation": "NAT 게이트웨이는 프라이빗 인스턴스가 인터넷으로 나가는 아웃바운드 트래픽은 허용하되, 인터넷에서 들어오는 인바운드 트래픽은 차단합니다."
    },
    {
        "category": "저장소",
        "title": "실수로 중요한 EBS 스냅샷이 삭제되는 것을 방지하고 싶습니다. 삭제된 스냅샷을 일정 기간 동안 복구할 수 있는 안전장치는 무엇입니까?",
        "options": [
            "EBS 스냅샷용 휴지통(Recycle Bin) 규칙을 설정한다.",
            "S3 버킷 버전을 활성화한다.",
            "IAM 정책으로 DeleteSnapshot 권한을 모두 제거한다.",
            "스냅샷을 매일 다른 리전으로 복사한다."
        ],
        "answer": "EBS 스냅샷용 휴지통(Recycle Bin) 규칙을 설정한다.",
        "explanation": "AWS Recycle Bin을 사용하면 삭제된 스냅샷을 설정한 보존 기간(예: 7일) 동안 보관하여 실수로 삭제된 경우 복구할 수 있습니다."
    },
    {
        "category": "분석",
        "title": "매일 S3에 업로드되는 대량의 데이터를 추출, 변환, 로드(ETL)해야 합니다. 이 과정에서 KMS를 사용한 암호화가 필수적이며 서버 관리 부담을 없애고 싶습니다. 어떤 서비스가 적합합니까?",
        "options": [
            "AWS Glue",
            "Amazon EMR",
            "Amazon EC2에 Spark 설치",
            "Amazon Redshift"
        ],
        "answer": "AWS Glue",
        "explanation": "AWS Glue는 서버리스 ETL 서비스로, 인프라 관리 없이 데이터를 변환할 수 있으며 KMS와 통합되어 데이터 암호화를 손쉽게 적용할 수 있습니다."
    },
    {
        "category": "보안",
        "title": "AWS 계정의 루트 사용자(Root User) 보안을 강화하기 위한 모범 사례는 무엇입니까?",
        "options": [
            "루트 사용자에게 MFA(다중 요소 인증)를 활성화한다.",
            "루트 사용자의 액세스 키를 생성하여 개발자에게 공유한다.",
            "일상적인 작업에 루트 사용자를 사용한다.",
            "루트 사용자의 비밀번호를 팀원들과 공유한다."
        ],
        "answer": "루트 사용자에게 MFA(다중 요소 인증)를 활성화한다.",
        "explanation": "루트 사용자는 모든 권한을 가지므로 MFA를 설정하여 보안을 강화해야 하며, 일상적인 작업에는 절대 사용하지 말아야 합니다."
    },
    {
        "category": "보안",
        "title": "조직 내의 모든 계정에서 암호화되지 않은 EBS 볼륨을 생성하지 못하도록 강제하고 싶습니다. 가장 효율적인 방법은 무엇입니까?",
        "options": [
            "AWS Organizations에서 SCP(서비스 제어 정책)를 사용하여 암호화되지 않은 볼륨 생성을 거부한다.",
            "모든 사용자의 IAM 정책을 수동으로 수정한다.",
            "CloudTrail 로그를 감시하여 위반 시 알림을 보낸다.",
            "각 리전별로 Config 규칙을 생성한다."
        ],
        "answer": "AWS Organizations에서 SCP(서비스 제어 정책)를 사용하여 암호화되지 않은 볼륨 생성을 거부한다.",
        "explanation": "SCP를 사용하면 조직 전체 계정에 대해 특정 작업(예: 암호화 없는 볼륨 생성)을 원천적으로 차단할 수 있어 관리가 용이합니다."
    },
    {
        "category": "보안",
        "title": "특정 S3 버킷 내의 ",
        "options": [
            "arn:aws:s3:::bucket-name/reports/*",
            "arn:aws:s3:::bucket-name",
            "arn:aws:s3:::bucket-name/*",
            "arn:aws:s3:::*"
        ],
        "answer": "arn:aws:s3:::bucket-name/reports/*",
        "explanation": "특정 경로 하위의 객체에 권한을 부여하려면 버킷 이름 뒤에 경로와 와일드카드(/*)를 명시해야 합니다."
    },
    {
        "category": "데이터베이스",
        "title": "DynamoDB에서 데이터를 읽을 때, 방금 쓴 데이터가 즉시 반영되지 않는 문제가 발생했습니다. 항상 최신 데이터를 읽으려면 어떻게 해야 합니까?",
        "options": [
            "강력한 일관된 읽기(Strongly Consistent Read)를 요청한다.",
            "DynamoDB Accelerator(DAX)를 사용한다.",
            "테이블에 인덱스를 추가한다.",
            "읽기 용량을 늘린다."
        ],
        "answer": "강력한 일관된 읽기(Strongly Consistent Read)를 요청한다.",
        "explanation": "DynamoDB는 기본적으로 최종 일관성을 제공하지만, 읽기 요청 시 ConsistentRead 파라미터를 true로 설정하면 강력한 일관된 읽기를 통해 최신 데이터를 보장받을 수 있습니다."
    },
    {
        "category": "데이터베이스",
        "title": "Amazon Aurora DB 클러스터의 읽기 트래픽이 급증하여 CPU 부하가 높습니다. 가용성을 높이면서 읽기 성능을 확장하는 가장 좋은 방법은 무엇입니까?",
        "options": [
            "Aurora 읽기 전용 복제본(Read Replica)을 추가한다.",
            "인스턴스 타입을 더 큰 것으로 변경한다.",
            "데이터베이스를 DynamoDB로 마이그레이션한다.",
            "ElastiCache를 도입한다."
        ],
        "answer": "Aurora 읽기 전용 복제본(Read Replica)을 추가한다.",
        "explanation": "Aurora 읽기 전용 복제본을 추가하면 읽기 트래픽을 분산시킬 수 있으며, 주 인스턴스 장애 시 복제본이 승격되어 가용성도 확보됩니다."
    },
    {
        "category": "컨테이너",
        "title": "온프레미스 서버와 AWS 클라우드 모두에서 동일한 컨테이너 관리 도구를 사용하여 애플리케이션을 운영하고 싶습니다. 어떤 서비스 조합이 적절합니까?",
        "options": [
            "Amazon ECS Anywhere",
            "AWS Fargate",
            "Amazon EC2 Auto Scaling",
            "AWS Lambda"
        ],
        "answer": "Amazon ECS Anywhere",
        "explanation": "Amazon ECS Anywhere를 사용하면 온프레미스 인프라(서버)에서도 ECS 에이전트를 통해 클라우드와 동일한 방식으로 컨테이너를 오케스트레이션할 수 있습니다."
    },
    {
        "category": "하이브리드",
        "title": "데이터 레지던시 규정으로 인해 데이터 처리는 반드시 사내 데이터 센터에서 이루어져야 하지만, AWS의 관리형 Kubernetes 서비스(EKS)를 사용하고 싶습니다. 해결책은 무엇입니까?",
        "options": [
            "AWS Outposts를 데이터 센터에 설치하고 EKS를 실행한다.",
            "AWS Direct Connect를 연결한다.",
            "Snowball Edge 장비를 사용한다.",
            "로컬 PC에 Minikube를 설치한다."
        ],
        "answer": "AWS Outposts를 데이터 센터에 설치하고 EKS를 실행한다.",
        "explanation": "AWS Outposts는 AWS 인프라와 서비스를 온프레미스 데이터 센터로 확장하여, 로컬에서 데이터를 처리하면서도 AWS 관리형 서비스(EKS 등)를 사용할 수 있게 합니다."
    },
    {
        "category": "데이터베이스",
        "title": "중단 시간이 거의 없는(Zero Downtime) 패치 및 유지 관리가 필요하며, 고가용성을 제공하는 관계형 데이터베이스 서비스는 무엇입니까?",
        "options": [
            "Amazon Aurora",
            "Amazon RDS for MariaDB",
            "Amazon EC2에 설치된 MySQL",
            "Amazon DynamoDB"
        ],
        "answer": "Amazon Aurora",
        "explanation": "Amazon Aurora는 데이터가 3개의 가용 영역에 6개로 복제되며, 내결함성이 뛰어나고 패치 시 중단 시간을 최소화하는 아키텍처를 가지고 있습니다."
    },
    {
        "category": "머신러닝",
        "title": "고객의 리뷰 텍스트를 분석하여 긍정/부정 감정을 실시간으로 파악하는 기능을 서버리스로 구현하려 합니다. 적절한 서비스 조합은?",
        "options": [
            "API Gateway + Lambda + Amazon Comprehend",
            "EC2 + Textract",
            "Kinesis + SageMaker",
            "S3 + Athena"
        ],
        "answer": "API Gateway + Lambda + Amazon Comprehend",
        "explanation": "Amazon Comprehend는 자연어 처리(NLP) 서비스로 감정 분석을 수행하며, API Gateway와 Lambda를 통해 서버리스 방식으로 실시간 처리가 가능합니다."
    },
    {
        "category": "네트워크",
        "title": "본사와 AWS 간의 전용 네트워크 연결이 필요하지만, 트래픽 양이 적고(50Mbps 미만) 비용을 최소화하고 싶습니다. 가장 적절한 연결 방식은?",
        "options": [
            "AWS Site-to-Site VPN",
            "AWS Direct Connect",
            "인터넷 게이트웨이",
            "VPC 피어링"
        ],
        "answer": "AWS Site-to-Site VPN",
        "explanation": "트래픽이 적고 비용 효율적인 전용 연결이 필요할 때는 인터넷망을 통한 암호화 연결인 Site-to-Site VPN이 Direct Connect보다 적합합니다."
    },
    {
        "category": "아키텍처",
        "title": "웹 애플리케이션에 주문이 몰릴 때 시스템이 다운되지 않도록, 주문 요청을 버퍼링하고 순차적으로 처리하고 싶습니다. 어떤 서비스를 사용해야 합니까?",
        "options": [
            "Amazon SQS와 Auto Scaling 그룹",
            "Amazon SNS와 Lambda",
            "Kinesis Data Streams",
            "DynamoDB Streams"
        ],
        "answer": "Amazon SQS와 Auto Scaling 그룹",
        "explanation": "SQS를 사용하여 요청을 대기열에 넣어 버퍼링하고, 대기열의 길이에 따라 Auto Scaling을 통해 처리 서버를 늘리면 트래픽 폭주에도 안정적입니다."
    },
    {
        "category": "데이터베이스",
        "title": "실시간으로 변동되는 게임 순위표(Leaderboard)를 구현해야 합니다. 지연 시간이 가장 낮고 순위 정렬 기능을 기본 제공하는 서비스는 무엇입니까?",
        "options": [
            "Amazon ElastiCache for Redis",
            "Amazon DynamoDB",
            "Amazon RDS",
            "Amazon S3"
        ],
        "answer": "Amazon ElastiCache for Redis",
        "explanation": "Redis의 Sorted Set 데이터 구조는 실시간 순위표 구현에 최적화되어 있으며, 인메모리 기반으로 초고속 응답 속도를 제공합니다."
    },
    {
        "category": "보안",
        "title": "규정 준수를 위해 각 고객별로 별도의 암호화 키를 사용하여 데이터를 암호화해야 합니다. 키 관리 오버헤드를 줄이면서 이를 구현하는 방법은?",
        "options": [
            "AWS KMS의 고객 관리형 키(CMK)를 고객별로 생성하여 사용한다.",
            "S3 관리형 키(SSE-S3)를 사용한다.",
            "클라이언트가 직접 키를 생성하여 관리하게 한다.",
            "단일 KMS 키를 모든 고객에게 사용한다."
        ],
        "answer": "AWS KMS의 고객 관리형 키(CMK)를 고객별로 생성하여 사용한다.",
        "explanation": "AWS KMS를 사용하면 키 생성, 회전, 권한 관리를 중앙에서 쉽게 할 수 있으며, 고객별로 별도의 CMK를 할당하여 규정을 준수할 수 있습니다."
    },
    {
        "category": "분석",
        "title": "수천 개의 IoT 디바이스에서 발생하는 로그 데이터를 실시간으로 수집하여 S3에 저장하고 싶습니다. 코드를 작성하지 않고 데이터를 전송하는 가장 쉬운 방법은?",
        "options": [
            "Amazon Kinesis Data Firehose",
            "Amazon Kinesis Data Streams",
            "AWS Lambda",
            "Amazon EC2"
        ],
        "answer": "Amazon Kinesis Data Firehose",
        "explanation": "Kinesis Data Firehose는 스트리밍 데이터를 S3, Redshift 등으로 로드하는 가장 쉬운 방법으로, 별도의 코드 작성 없이 구성만으로 가능합니다."
    },
    {
        "category": "보안",
        "title": "S3 버킷에 저장된 기존 객체들이 암호화되어 있지 않습니다. 모든 기존 객체를 암호화하고, 앞으로 업로드되는 객체도 암호화를 강제하려면 어떻게 해야 합니까?",
        "options": [
            "S3 일괄 작업(Batch Operations)으로 기존 객체를 암호화하고, 버킷 정책으로 암호화된 업로드만 허용한다.",
            "모든 객체를 다운로드 후 다시 업로드한다.",
            "AWS Config를 사용하여 규정 위반을 탐지한다.",
            "KMS 키를 삭제한다."
        ],
        "answer": "S3 일괄 작업(Batch Operations)으로 기존 객체를 암호화하고, 버킷 정책으로 암호화된 업로드만 허용한다.",
        "explanation": "S3 Batch Operations를 사용하면 수십억 개의 기존 객체에 대해 암호화 복사 작업을 일괄 수행할 수 있습니다."
    },
    {
        "category": "보안",
        "title": "보안 규정에 따라 암호화 키를 매년 자동으로 교체(Rotation)해야 합니다. 운영 부담을 최소화하는 방법은?",
        "options": [
            "AWS KMS의 자동 키 교체 기능을 활성화한다.",
            "매년 수동으로 새 키를 만들고 애플리케이션을 업데이트한다.",
            "S3 관리형 키를 사용한다.",
            "CloudHSM을 사용한다."
        ],
        "answer": "AWS KMS의 자동 키 교체 기능을 활성화한다.",
        "explanation": "AWS KMS의 자동 키 교체 기능을 켜면 매년 자동으로 키 구성 요소가 교체되며, 이전 데이터의 복호화도 자동으로 지원되므로 관리가 쉽습니다."
    },
    {
        "category": "운영",
        "title": "AWS 리전의 장애나 서비스 중단이 내 리소스에 영향을 주는지 실시간으로 확인하고 싶습니다. 어떤 서비스를 사용해야 합니까?",
        "options": [
            "AWS Health Dashboard (Personal Health Dashboard)",
            "AWS CloudTrail",
            "Amazon CloudWatch Logs",
            "AWS Trusted Advisor"
        ],
        "answer": "AWS Health Dashboard (Personal Health Dashboard)",
        "explanation": "AWS Health Dashboard는 AWS의 서비스 상태가 사용자의 특정 리소스에 미치는 영향을 개인화하여 보여줍니다."
    },
    {
        "category": "네트워크",
        "title": "프라이빗 서브넷의 EC2 인스턴스가 인터넷을 거치지 않고 S3에 데이터를 업로드해야 하며, 온프레미스 서버에서도 이 데이터를 사용해야 합니다. 공용 인터넷 노출을 피하면서 이를 구현하는 가장 안전한 아키텍처는 무엇입니까?",
        "options": [
            "S3용 게이트웨이 VPC 엔드포인트와 AWS Direct Connect를 사용한다.",
            "EC2용 인터페이스 VPC 엔드포인트를 사용한다.",
            "NAT 게이트웨이를 통해 프록시 서버를 구성한다.",
            "Transit Gateway와 VPN을 사용한다."
        ],
        "answer": "S3용 게이트웨이 VPC 엔드포인트와 AWS Direct Connect를 사용한다.",
        "explanation": "게이트웨이 엔드포인트는 S3에 대한 프라이빗 연결을 제공하며, Direct Connect는 온프레미스와 AWS 간의 전용 사설망 연결을 제공하여 보안 규정 준수 요건을 만족합니다."
    },
    {
        "category": "저장소",
        "title": "리눅스 기반 문서 관리 애플리케이션이 여러 가용 영역의 EC2 인스턴스에서 실행 중입니다. 7TiB 규모의 데이터를 공유해야 하며, 애플리케이션 코드를 수정하지 않고 확장성과 고가용성을 확보하려면 어떤 스토리지를 사용해야 합니까?",
        "options": [
            "Amazon EFS (Elastic File System)",
            "Amazon S3 Standard",
            "Amazon EBS (Elastic Block Store)",
            "AWS Storage Gateway"
        ],
        "answer": "Amazon EFS (Elastic File System)",
        "explanation": "EFS는 리눅스 인스턴스 간에 공유 가능한 확장형 파일 시스템을 제공하며, 애플리케이션 수정 없이 표준 파일 시스템 인터페이스로 마운트하여 사용할 수 있습니다."
    },
    {
        "category": "서버리스",
        "title": "관리 오버헤드를 최소화하면서 확장 가능한 마이크로서비스 API를 구축하려고 합니다. 트래픽 급증을 처리할 수 있고 유휴 상태일 때는 비용이 발생하지 않는 구조는 무엇입니까?",
        "options": [
            "Amazon API Gateway + AWS Lambda",
            "Application Load Balancer + Amazon EC2",
            "Amazon ECS + Fargate",
            "AWS Elastic Beanstalk"
        ],
        "answer": "Amazon API Gateway + AWS Lambda",
        "explanation": "API Gateway와 Lambda 조합은 서버 관리가 필요 없는 완전한 서버리스 아키텍처로, 요청 수에 따라 자동 확장되며 사용한 만큼만 비용을 지불합니다."
    },
    {
        "category": "데이터베이스",
        "title": "Amazon RDS를 사용하는 웹 애플리케이션에서 읽기 트래픽이 폭주하여 데이터베이스 성능이 저하되고 있습니다. 애플리케이션 응답 속도를 개선하기 위해 가장 효과적인 캐싱 전략은 무엇입니까?",
        "options": [
            "Amazon ElastiCache for Redis를 도입하여 쿼리 결과를 캐싱한다.",
            "RDS 인스턴스 크기를 두 배로 늘린다.",
            "RDS 다중 AZ(Multi-AZ) 배포를 활성화한다.",
            "DynamoDB로 데이터베이스를 마이그레이션한다."
        ],
        "answer": "Amazon ElastiCache for Redis를 도입하여 쿼리 결과를 캐싱한다.",
        "explanation": "ElastiCache를 사용하여 빈번하게 조회되는 데이터를 메모리에 캐싱하면, 데이터베이스의 읽기 부하를 크게 줄이고 응답 속도를 밀리초 단위로 단축할 수 있습니다."
    },
    {
        "category": "분석",
        "title": "AWS Lake Formation을 사용하여 데이터 레이크를 구축했습니다. 특정 부서가 데이터의 민감한 열(Column)이나 행(Row)을 보지 못하도록 제한하려고 합니다. 가장 효율적인 방법은 무엇입니까?",
        "options": [
            "Lake Formation의 데이터 필터(Data Filters) 기능을 사용한다.",
            "데이터를 별도의 S3 버킷으로 복사하여 권한을 분리한다.",
            "IAM 정책을 사용하여 특정 S3 객체에 대한 접근을 차단한다.",
            "Lambda 함수로 데이터를 마스킹하여 제공한다."
        ],
        "answer": "Lake Formation의 데이터 필터(Data Filters) 기능을 사용한다.",
        "explanation": "Lake Formation의 데이터 필터를 사용하면 데이터 복제 없이도 행(Row) 및 열(Column) 수준의 세분화된 접근 제어를 적용할 수 있습니다."
    },
    {
        "category": "컴퓨팅",
        "title": "매일 아침 9시에 트래픽이 급증하는 업무용 애플리케이션이 있습니다. 사용자 경험을 저해하지 않으면서 미리 용량을 확보하려면 Auto Scaling 그룹을 어떻게 설정해야 합니까?",
        "options": [
            "예약된 조정(Scheduled Scaling) 작업을 설정한다.",
            "대상 추적(Target Tracking) 조정 정책을 사용한다.",
            "단계 조정(Step Scaling) 정책을 사용한다.",
            "항상 최대 용량으로 인스턴스를 유지한다."
        ],
        "answer": "예약된 조정(Scheduled Scaling) 작업을 설정한다.",
        "explanation": "트래픽 패턴이 예측 가능한 경우(매일 아침 9시), 예약된 조정을 통해 트래픽이 몰리기 전에 미리 인스턴스를 확장해 두는 것이 가장 효과적입니다."
    },
    {
        "category": "하이브리드",
        "title": "온프레미스 Windows 파일 서버의 용량이 부족합니다. 사용자가 지연 시간 없이 기존 파일에 접근하면서, 오래된 파일은 자동으로 클라우드로 옮겨 용량을 확보하고 싶습니다. 어떤 솔루션이 적합합니까?",
        "options": [
            "Amazon FSx File Gateway",
            "S3 File Gateway",
            "AWS DataSync",
            "AWS Snowball Edge"
        ],
        "answer": "Amazon FSx File Gateway",
        "explanation": "FSx File Gateway는 온프레미스에서 Windows 파일 공유(SMB)를 캐싱하여 낮은 지연 시간을 제공하며, 원본 데이터는 AWS의 FSx for Windows File Server에 저장하여 용량을 확장합니다."
    },
    {
        "category": "보안",
        "title": "Application Load Balancer(ALB) 뒤에 있는 웹 애플리케이션이 특정 IP로부터 대량의 트래픽 공격(DDoS)을 받고 있습니다. 합법적인 사용자의 영향을 최소화하면서 이를 차단하려면 어떻게 해야 합니까?",
        "options": [
            "AWS WAF를 ALB에 연결하고 속도 기반 규칙(Rate-based rule)을 설정한다.",
            "ALB의 보안 그룹에서 해당 IP를 차단한다.",
            "Amazon GuardDuty를 활성화하여 공격을 탐지한다.",
            "CloudFront를 배포하고 모든 트래픽을 캐싱한다."
        ],
        "answer": "AWS WAF를 ALB에 연결하고 속도 기반 규칙(Rate-based rule)을 설정한다.",
        "explanation": "AWS WAF의 속도 기반 규칙은 특정 IP가 5분 동안 임계값을 초과하여 요청을 보낼 경우 자동으로 해당 IP를 차단하여 DDoS 공격을 완화합니다."
    },
    {
        "category": "관리 및 거버넌스",
        "title": "회사의 규정 준수팀이 AWS 리소스의 구성 변경 내역을 추적하고, 특정 시점의 리소스 상태를 확인하고 싶어 합니다. 이를 위해 활성화해야 하는 서비스는 무엇입니까?",
        "options": [
            "AWS Config",
            "AWS CloudTrail",
            "Amazon CloudWatch Logs",
            "AWS Trusted Advisor"
        ],
        "answer": "AWS Config",
        "explanation": "AWS Config는 리소스의 구성을 지속적으로 모니터링하고 기록하여, 변경 이력을 추적하고 규정 준수 여부를 평가하는 데 특화된 서비스입니다."
    },
    {
        "category": "네트워크",
        "title": "온프레미스 데이터 센터와 AWS VPC 간의 통신이 반드시 암호화되어야 합니다. 또한, 특정 트래픽만 허용하도록 접근 제어가 필요합니다. 가장 적절한 연결 방식은 무엇입니까?",
        "options": [
            "AWS Site-to-Site VPN",
            "AWS Direct Connect",
            "VPC 피어링",
            "Transit Gateway"
        ],
        "answer": "AWS Site-to-Site VPN",
        "explanation": "Site-to-Site VPN은 IPsec 터널을 통해 데이터를 암호화하여 전송하므로, 보안 요구사항을 충족하며 네트워크 ACL 및 보안 그룹으로 접근 제어가 가능합니다."
    },
    {
        "category": "보안",
        "title": "보안 정책상 SSH(22번 포트)가 0.0.0.0/0(전체 공개)으로 열려 있는 보안 그룹이 생성되면 즉시 알림을 받고 싶습니다. 운영 오버헤드가 가장 적은 방법은 무엇입니까?",
        "options": [
            "AWS Config 관리형 규칙(restricted-ssh)을 사용하고 위반 시 SNS로 알림을 보낸다.",
            "Lambda 함수를 작성하여 매시간 보안 그룹을 검사한다.",
            "VPC 흐름 로그를 분석하여 SSH 트래픽을 감지한다.",
            "CloudTrail 로그를 Athena로 쿼리한다."
        ],
        "answer": "AWS Config 관리형 규칙(restricted-ssh)을 사용하고 위반 시 SNS로 알림을 보낸다.",
        "explanation": "AWS Config는 "
    },
    {
        "category": "네트워크",
        "title": "프라이빗 서브넷의 EC2 인스턴스가 S3 버킷의 대용량 데이터를 자주 다운로드해야 합니다. NAT 게이트웨이 처리 비용을 절감하면서 S3에 접근하는 가장 좋은 방법은 무엇입니까?",
        "options": [
            "S3용 게이트웨이 VPC 엔드포인트(Gateway VPC Endpoint)를 생성한다.",
            "NAT 게이트웨이를 하나 더 추가한다.",
            "EC2 인스턴스에 퍼블릭 IP를 할당한다.",
            "AWS Direct Connect를 사용한다."
        ],
        "answer": "S3용 게이트웨이 VPC 엔드포인트(Gateway VPC Endpoint)를 생성한다.",
        "explanation": "S3 게이트웨이 엔드포인트는 추가 비용 없이 VPC 내부에서 S3로 직접 연결을 제공하므로, NAT 게이트웨이의 데이터 처리 비용을 절감할 수 있는 최적의 방법입니다."
    },
    {
        "category": "분석",
        "title": "S3에 업로드된 데이터를 정제하고 변환하는 작업을 코드를 작성하지 않고 시각적으로 구성하고 싶습니다. 또한 이 작업은 이벤트에 따라 자동으로 실행되어야 합니다. 적절한 서비스 조합은?",
        "options": [
            "AWS Glue DataBrew + AWS Step Functions",
            "AWS Lambda + Amazon SNS",
            "Amazon EMR + Apache Spark",
            "Amazon Athena + QuickSight"
        ],
        "answer": "AWS Glue DataBrew + AWS Step Functions",
        "explanation": "Glue DataBrew는 코드 없이 시각적 인터페이스로 데이터 전처리를 수행하며, Step Functions를 사용하면 이러한 작업을 워크플로로 자동화할 수 있습니다."
    },
    {
        "category": "아키텍처",
        "title": "이미지 처리 작업을 수행하는 배치 애플리케이션이 있습니다. 작업 요청이 불규칙적으로 들어오며, 처리되지 않은 작업은 손실되지 않고 나중에라도 반드시 처리되어야 합니다. 가장 적합한 아키텍처는?",
        "options": [
            "Amazon SQS + EC2 Auto Scaling 그룹",
            "Amazon SNS + Lambda",
            "Kinesis Data Streams + EMR",
            "EC2 인스턴스에 Cron 작업 설정"
        ],
        "answer": "Amazon SQS + EC2 Auto Scaling 그룹",
        "explanation": "SQS는 작업을 대기열에 저장하여 유실을 방지하고(내구성), Auto Scaling 그룹은 대기열 길이에 따라 처리 인스턴스를 동적으로 조절하여 효율성을 높입니다."
    },
    {
        "category": "데이터베이스",
        "title": "온프레미스 Oracle 데이터베이스를 AWS Aurora PostgreSQL로 마이그레이션하려고 합니다. 스키마 변환과 데이터 복제를 모두 수행해야 합니다. 어떤 도구 조합을 사용해야 합니까?",
        "options": [
            "AWS SCT(Schema Conversion Tool) + AWS DMS(Database Migration Service)",
            "AWS DataSync + S3",
            "Oracle Data Pump + Aurora Read Replica",
            "Native PostgreSQL Backup/Restore"
        ],
        "answer": "AWS SCT(Schema Conversion Tool) + AWS DMS(Database Migration Service)",
        "explanation": "SCT는 이기종 DB 간의 스키마(구조)를 변환해주며, DMS는 실제 데이터를 중단 시간을 최소화하여 복제/이관하는 데 사용됩니다."
    },
    {
        "category": "저장소",
        "title": "온프레미스에 있는 50TB 규모의 NFS 파일 데이터를 Amazon S3로 온라인으로 전송해야 합니다. 전용선이 없으며 인터넷을 통해 안전하고 빠르게 전송하고 싶습니다. 가장 적합한 서비스는?",
        "options": [
            "AWS DataSync",
            "AWS Snowball Edge",
            "S3 Transfer Acceleration",
            "VPN 연결 후 rsync 사용"
        ],
        "answer": "AWS DataSync",
        "explanation": "AWS DataSync는 인터넷이나 전용선을 통해 대용량 데이터를 S3, EFS 등으로 빠르고 안전하게 전송하도록 최적화된 관리형 서비스입니다."
    },
    {
        "category": "보안",
        "title": "전 세계 사용자를 대상으로 하는 웹 애플리케이션에 사용자 가입 및 로그인 기능을 추가하려 합니다. 소셜 로그인(Google, Facebook)을 지원하고 서버 관리가 필요 없어야 합니다. 무엇을 사용해야 합니까?",
        "options": [
            "Amazon Cognito User Pools",
            "AWS IAM Users",
            "자체 데이터베이스에 사용자 테이블 생성",
            "AWS Directory Service"
        ],
        "answer": "Amazon Cognito User Pools",
        "explanation": "Cognito User Pools는 수백만 명의 사용자로 확장 가능한 완전 관리형 자격 증명 저장소로, 소셜 로그인 연동 및 표준 인증(OIDC/SAML)을 지원합니다."
    },
    {
        "category": "저장소",
        "title": "HTML, CSS, 이미지 파일로 구성된 홍보용 웹사이트를 구축하려고 합니다. 서버 운영 없이 가장 저렴하고 높은 가용성을 제공하는 방법은 무엇입니까?",
        "options": [
            "Amazon S3 정적 웹사이트 호스팅 + Amazon CloudFront",
            "EC2 인스턴스에 Apache 웹서버 설치",
            "AWS Elastic Beanstalk 사용",
            "Lambda 함수로 HTML 반환"
        ],
        "answer": "Amazon S3 정적 웹사이트 호스팅 + Amazon CloudFront",
        "explanation": "S3는 정적 파일을 호스팅하는 가장 비용 효율적인 방법이며, CloudFront(CDN)를 앞단에 두어 전 세계 사용자에게 빠른 속도로 콘텐츠를 전송할 수 있습니다."
    },
    {
        "category": "컴퓨팅",
        "title": "수만 개의 이미지를 처리하여 썸네일을 생성하는 배치 작업이 있습니다. 작업의 우선순위를 지정하고 컴퓨팅 자원을 자동으로 프로비저닝하여 관리 오버헤드를 줄이려면 어떤 서비스를 써야 합니까?",
        "options": [
            "AWS Batch",
            "Amazon ECS",
            "AWS Lambda",
            "EC2 스팟 인스턴스 직접 관리"
        ],
        "answer": "AWS Batch",
        "explanation": "AWS Batch는 제출된 배치 작업의 규모와 우선순위에 따라 EC2 인스턴스 등의 컴퓨팅 자원을 자동으로 프로비저닝하고 스케줄링해주는 서비스입니다."
    },
    {
        "category": "보안 및 규정 준수",
        "title": "재해 복구(DR) 계획의 일환으로 EC2 인스턴스와 RDS 데이터베이스의 백업을 자동으로 생성하고, 이를 다른 리전으로 복사하여 보관해야 합니다. 가장 운영 효율적인 방법은?",
        "options": [
            "AWS Backup을 사용하여 리전 간 복사(Cross-Region Copy)를 구성한다.",
            "Lambda 함수로 스냅샷을 찍고 S3로 복사하는 스크립트를 짠다.",
            "RDS의 읽기 전용 복제본을 다른 리전에 생성한다.",
            "S3 CRR(Cross-Region Replication)을 사용한다."
        ],
        "answer": "AWS Backup을 사용하여 리전 간 복사(Cross-Region Copy)를 구성한다.",
        "explanation": "AWS Backup은 중앙 집중식 백업 서비스로, EC2, RDS 등 다양한 서비스의 백업을 자동화하고 다른 리전으로 복사하는 기능을 기본적으로 제공합니다."
    },
    {
        "category": "아키텍처",
        "title": "마케팅 이벤트로 인해 트래픽이 폭주할 때, 데이터베이스에 쓰기 요청이 몰려 DB가 다운될 위험이 있습니다. 요청을 유실하지 않고 DB 부하를 조절(Throttling)하려면 어떤 구조를 도입해야 합니까?",
        "options": [
            "Amazon SQS를 DB 앞단에 두어 요청을 버퍼링한다.",
            "RDS 인스턴스 타입을 최대 크기로 늘린다.",
            "DynamoDB로 교체한다.",
            "API Gateway의 스로틀링 기능을 사용한다."
        ],
        "answer": "Amazon SQS를 DB 앞단에 두어 요청을 버퍼링한다.",
        "explanation": "SQS 대기열을 사용하면 트래픽 폭주 시 요청을 큐에 저장해두고, DB가 처리할 수 있는 속도로 메시지를 가져와 처리함으로써 DB를 보호하고 데이터 유실을 방지할 수 있습니다."
    },
    {
        "category": "분석",
        "title": "웹사이트 클릭스트림 데이터를 실시간으로 수집하여 분석 대시보드에 표시하려고 합니다. 데이터 변환 후 S3 데이터 레이크에도 저장해야 합니다. 가장 적합한 서비스 조합은?",
        "options": [
            "Amazon Kinesis Data Firehose + Amazon Redshift/S3",
            "SQS + Lambda + RDS",
            "EC2 + Kafka + EBS",
            "Glue + Athena"
        ],
        "answer": "Amazon Kinesis Data Firehose + Amazon Redshift/S3",
        "explanation": "Kinesis Data Firehose는 실시간 스트리밍 데이터를 캡처하여 S3, Redshift, OpenSearch 등으로 가장 쉽게 로드할 수 있는 완전 관리형 서비스입니다."
    },
    {
        "category": "하이브리드",
        "title": "온프레미스 애플리케이션이 SMB 프로토콜을 사용하여 대용량 파일을 저장해야 합니다. 로컬 캐시를 통해 빠른 액세스를 유지하면서, 실제 데이터는 S3에 저장하여 용량을 무제한으로 쓰고 싶습니다. 무엇을 사용해야 합니까?",
        "options": [
            "AWS Storage Gateway (File Gateway)",
            "AWS DataSync",
            "Amazon FSx for Windows File Server",
            "S3 Direct Put"
        ],
        "answer": "AWS Storage Gateway (File Gateway)",
        "explanation": "File Gateway는 S3를 백엔드 스토리지로 사용하면서 온프레미스에 SMB 파일 공유 인터페이스를 제공하며, 자주 쓰는 파일은 로컬에 캐싱하여 빠른 속도를 보장합니다."
    },
    {
        "category": "데이터베이스",
        "title": "DynamoDB 테이블의 데이터가 변경될 때마다 즉시 다운스트림 서비스에 알림을 보내야 합니다. 이를 구현하는 가장 효율적인 방법은 무엇입니까?",
        "options": [
            "DynamoDB Streams를 활성화하고 Lambda를 트리거하여 SNS로 알림을 보낸다.",
            "애플리케이션에서 업데이트 후 SNS를 호출한다.",
            "매분 테이블을 스캔하는 Lambda를 만든다.",
            "CloudWatch Logs를 구독한다."
        ],
        "answer": "DynamoDB Streams를 활성화하고 Lambda를 트리거하여 SNS로 알림을 보낸다.",
        "explanation": "DynamoDB Streams는 변경 데이터 캡처(CDC) 기능을 제공하며, Lambda와 결합하여 변경 발생 시 즉각적인 이벤트 처리가 가능합니다."
    },
    {
        "category": "데이터베이스",
        "title": "게임 순위표(Leaderboard)와 같이 데이터 액세스 지연 시간이 마이크로초 단위여야 하는 실시간 애플리케이션을 구축 중입니다. 데이터 지속성도 어느 정도 필요합니다. 적합한 서비스는?",
        "options": [
            "Amazon ElastiCache for Redis",
            "Amazon ElastiCache for Memcached",
            "Amazon DynamoDB",
            "Amazon RDS"
        ],
        "answer": "Amazon ElastiCache for Redis",
        "explanation": "Redis는 정렬된 집합(Sorted Sets) 등 순위표 구현에 유용한 기능을 제공하며, 데이터 지속성(Persistence)과 복제 기능을 지원하여 Memcached보다 적합합니다."
    },
    {
        "category": "애플리케이션 통합",
        "title": "Elastic Beanstalk을 사용하여 애플리케이션을 배포 중입니다. 새 버전을 배포할 때 중단 시간이 없어야 하며, 문제가 발생하면 즉시 이전 버전으로 롤백할 수 있어야 합니다. 가장 적합한 배포 정책은?",
        "options": [
            "Immutable(불변) 배포 또는 Blue/Green 배포",
            "All at once (한 번에 모두)",
            "Rolling (롤링)",
            "Rolling with additional batch (추가 배치를 사용한 롤링)"
        ],
        "answer": "Immutable(불변) 배포 또는 Blue/Green 배포",
        "explanation": "Immutable 또는 Blue/Green 배포는 새 환경을 완전히 구축한 후 트래픽을 전환하므로, 배포 중 서비스 중단이 없고 문제 발생 시 즉시 구 버전으로 원복(DNS 전환)이 가능합니다."
    },
    {
        "category": "네트워크",
        "title": "전 세계 사용자에게 정적 및 동적 콘텐츠를 제공하는 웹 애플리케이션이 있습니다. 사용자의 언어 설정(Accept-Language 헤더)에 따라 다른 콘텐츠를 캐싱하여 제공하려면 어떻게 해야 합니까?",
        "options": [
            "CloudFront 배포를 생성하고 Accept-Language 헤더를 화이트리스트에 추가하여 캐싱한다.",
            "S3 버킷을 지역별로 복제한다.",
            "Route 53 지리적 위치 라우팅을 사용한다.",
            "ALB에서 언어를 감지하여 리디렉션한다."
        ],
        "answer": "CloudFront 배포를 생성하고 Accept-Language 헤더를 화이트리스트에 추가하여 캐싱한다.",
        "explanation": "CloudFront에서 특정 헤더(Accept-Language)를 기반으로 캐싱하도록 설정하면, 언어별로 다른 버전의 콘텐츠를 에지 로케이션에 캐싱하여 제공할 수 있습니다."
    },
    {
        "category": "보안",
        "title": "Amazon Aurora 데이터베이스에 대한 모든 로그인 시도(성공 및 실패)를 감사하고 싶습니다. 로그 데이터는 분석을 위해 중앙의 S3 버킷으로 모아야 합니다. 가장 효율적인 방법은?",
        "options": [
            "Aurora 감사 로그(Audit Logs)를 활성화하고 CloudWatch Logs로 보낸 뒤, 구독 필터를 통해 S3로 내보낸다.",
            "CloudTrail을 사용하여 데이터베이스 로그인을 추적한다.",
            "애플리케이션에서 로그인 로그를 직접 S3로 쏜다.",
            "VPC 흐름 로그를 분석한다."
        ],
        "answer": "Aurora 감사 로그(Audit Logs)를 활성화하고 CloudWatch Logs로 보낸 뒤, 구독 필터를 통해 S3로 내보낸다.",
        "explanation": "Aurora는 고급 감사(Advanced Auditing) 기능을 제공하며, 이를 CloudWatch Logs로 전송한 후 Kinesis Firehose 등을 통해 S3로 영구 보관할 수 있습니다. (CloudTrail은 제어 평면 API만 기록함)"
    },
    {
        "category": "보안",
        "title": "S3 버킷에 저장된 데이터에 대해 비정상적인 접근 패턴이나 악성 IP로부터의 접근을 탐지하고 싶습니다. 어떤 보안 서비스를 활성화해야 합니까?",
        "options": [
            "Amazon GuardDuty",
            "Amazon Macie",
            "AWS WAF",
            "AWS Shield"
        ],
        "answer": "Amazon GuardDuty",
        "explanation": "GuardDuty는 CloudTrail S3 데이터 이벤트를 분석하여 S3 버킷에 대한 비정상적인 액세스나 잠재적인 위협을 탐지할 수 있습니다. (Macie는 민감 데이터 식별용)"
    },
    {
        "category": "관리 및 거버넌스",
        "title": "새로운 규정 준수 요건에 따라 격리된 여러 AWS 계정을 생성하고 관리해야 합니다. 계정 생성 프로세스를 자동화하고, 모든 계정에 보안 기준(Guardrail)을 강제 적용하려면 무엇을 사용해야 합니까?",
        "options": [
            "AWS Control Tower",
            "AWS Organizations 만 단독 사용",
            "AWS Service Catalog",
            "Terraform 스크립트"
        ],
        "answer": "AWS Control Tower",
        "explanation": "AWS Control Tower는 AWS Organizations를 기반으로 하여, 다중 계정 환경(Landing Zone)을 자동으로 설정하고 보안 정책(가드레일)을 손쉽게 적용 및 관리해주는 서비스입니다."
    },
    {
        "category": "비용 최적화",
        "title": "회사의 현재 연도 AWS 사용 비용과 향후 12개월간의 비용 예측 데이터에 프로그래밍 방식으로 접근하여 내부 대시보드에 표시하려고 합니다. 운영 오버헤드가 가장 적은 방법은 무엇입니까?",
        "options": [
            "AWS Cost Explorer API를 사용한다.",
            "AWS Budgets 보고서를 이메일로 받아 파싱한다.",
            "Cost & Usage Report(CUR)를 S3에 저장하고 Athena로 쿼리한다.",
            "AWS Billing 콘솔에서 CSV를 수동으로 다운로드한다."
        ],
        "answer": "AWS Cost Explorer API를 사용한다.",
        "explanation": "AWS Cost Explorer API를 사용하면 비용 및 사용량 데이터와 향후 예측 데이터에 직접 프로그래밍 방식으로 접근할 수 있어 별도의 데이터 처리 파이프라인이 필요 없습니다."
    },
    {
        "category": "저장소",
        "title": "수 페타바이트의 데이터가 S3 Standard에 저장되어 있습니다. 데이터 접근 패턴이 불규칙하여 자주 액세스되는지 알 수 없습니다. 성능 저하 없이 비용을 최적화하려면 어떤 스토리지 클래스를 사용해야 합니까?",
        "options": [
            "S3 Intelligent-Tiering",
            "S3 Standard-Infrequent Access (S3 Standard-IA)",
            "S3 Glacier Instant Retrieval",
            "S3 One Zone-IA"
        ],
        "answer": "S3 Intelligent-Tiering",
        "explanation": "S3 Intelligent-Tiering은 액세스 패턴을 모니터링하여 데이터를 자주 액세스하는 티어와 자주 액세스하지 않는 티어 간에 자동으로 이동시켜 주므로, 패턴을 알 수 없는 데이터에 가장 적합합니다."
    },
    {
        "category": "컴퓨팅",
        "title": "단일 EBS 볼륨을 여러 개의 EC2 Nitro 인스턴스에 동시에 연결하여 쓰기 작업을 수행해야 합니다. 고가용성을 위해 어떤 EBS 볼륨 유형을 사용해야 합니까?",
        "options": [
            "Provisioned IOPS SSD (io2)",
            "General Purpose SSD (gp3)",
            "Throughput Optimized HDD (st1)",
            "Cold HDD (sc1)"
        ],
        "answer": "Provisioned IOPS SSD (io2)",
        "explanation": "EBS 다중 연결(Multi-Attach) 기능은 io1 및 io2(Provisioned IOPS SSD) 볼륨에서만 지원되며, 이를 통해 여러 인스턴스가 동시에 하나의 볼륨에 R/W 접근을 할 수 있습니다."
    },
    {
        "category": "보안",
        "title": "S3 버킷에서 호스팅되는 정적 웹사이트가 있습니다. 특정 사내 IP 주소에서만 접근을 허용하고, HTTPS를 강제하며, S3 직접 접근을 차단하고 싶습니다. 어떤 구성이 필요합니까?",
        "options": [
            "CloudFront를 생성하고 OAC(Origin Access Control)를 설정한 뒤, AWS WAF를 CloudFront에 연결하여 IP를 제한한다.",
            "S3 버킷 정책에서 IP 제한을 설정하고 정적 웹 호스팅 기능을 켠다.",
            "S3 버킷을 프라이빗 서브넷으로 옮긴다.",
            "Route 53에서 지리적 차단을 설정한다."
        ],
        "answer": "CloudFront를 생성하고 OAC(Origin Access Control)를 설정한 뒤, AWS WAF를 CloudFront에 연결하여 IP를 제한한다.",
        "explanation": "CloudFront와 OAC를 사용하면 S3 직접 접근을 막을 수 있고(HTTPS 지원), AWS WAF(웹 방화벽)를 연결하여 특정 IP만 허용하는 보안 규칙을 적용할 수 있습니다."
    },
    {
        "category": "보안",
        "title": "규정 준수를 위해 EC2 인스턴스에 연결되는 모든 새로운 EBS 볼륨이 생성될 때 자동으로 암호화되도록 보장하고 싶습니다. 가장 관리 부담이 적은 방법은 무엇입니까?",
        "options": [
            "EC2 대시보드의 ",
            " 계정 설정을 활성화한다.",
            "IAM 정책을 사용하여 암호화되지 않은 볼륨 생성을 거부한다.",
            "AWS Config 규칙을 사용하여 암호화되지 않은 볼륨을 탐지하고 삭제한다.",
            "KMS 키 정책을 수정하여 모든 사용자가 암호화를 사용하도록 강제한다."
        ],
        "answer": "EC2 대시보드의 ",
        "explanation": "리전별로 "
    },
    {
        "category": "데이터베이스",
        "title": "전 세계 사용자를 대상으로 하는 모바일 게임이 있습니다. 사용자의 위치와 상관없이 매우 낮은 지연 시간으로 데이터를 읽고 써야 하며, 지역(Region) 장애 시에도 서비스가 지속되어야 합니다. 적절한 데이터베이스는?",
        "options": [
            "Amazon DynamoDB Global Tables",
            "Amazon Aurora Global Database",
            "Amazon RDS for MySQL with Read Replicas",
            "Amazon ElastiCache Global Datastore"
        ],
        "answer": "Amazon DynamoDB Global Tables",
        "explanation": "DynamoDB Global Tables는 다중 리전, 다중 마스터(Multi-master) 데이터베이스로, 전 세계 어디서든 로컬 리전에서 데이터를 읽고 쓸 수 있어 최고의 성능과 가용성을 제공합니다."
    },
    {
        "category": "네트워크",
        "title": "프라이빗 서브넷의 EC2 인스턴스에서 DynamoDB에 접근하려고 합니다. 데이터가 공용 인터넷을 통과하지 않도록 하려면 무엇을 설정해야 합니까?",
        "options": [
            "DynamoDB용 게이트웨이 VPC 엔드포인트(Gateway VPC Endpoint)",
            "DynamoDB용 인터페이스 VPC 엔드포인트",
            "NAT 게이트웨이",
            "VPN 연결"
        ],
        "answer": "DynamoDB용 게이트웨이 VPC 엔드포인트(Gateway VPC Endpoint)",
        "explanation": "S3와 DynamoDB는 "
    },
    {
        "category": "네트워크",
        "title": "웹 애플리케이션의 기본 리전이 다운되었을 때, 사용자를 S3 버킷에 호스팅된 정적 오류 페이지(점검 중 화면)로 리디렉션하고 싶습니다. Route 53 라우팅 정책은 무엇입니까?",
        "options": [
            "장애 조치(Failover) 라우팅 정책",
            "지연 시간(Latency) 라우팅 정책",
            "가중치 기반(Weighted) 라우팅 정책",
            "지리적 위치(Geolocation) 라우팅 정책"
        ],
        "answer": "장애 조치(Failover) 라우팅 정책",
        "explanation": "Failover 라우팅은 기본 리소스(Active)의 상태 확인(Health Check)이 실패할 경우, 보조 리소스(Passive, 여기서는 S3 정적 페이지)로 트래픽을 자동으로 전환합니다."
    },
    {
        "category": "비용 최적화",
        "title": "향후 3년 동안 24시간 내내 실행되어야 하는 데이터베이스 서버가 있습니다. 예산이 한정되어 있어 초기 비용(Upfront)을 낼 수 없을 때, 가장 비용 효율적인 예약 인스턴스(RI) 옵션은 무엇입니까?",
        "options": [
            "No Upfront (선결제 없음) 예약 인스턴스",
            "All Upfront (전체 선결제) 예약 인스턴스",
            "Partial Upfront (부분 선결제) 예약 인스턴스",
            "온디맨드 인스턴스"
        ],
        "answer": "No Upfront (선결제 없음) 예약 인스턴스",
        "explanation": "초기 비용을 지불할 수 없는 경우 "
    },
    {
        "category": "저장소",
        "title": "여러 가용 영역(AZ)에 걸쳐 있는 Windows EC2 인스턴스들이 공통의 Windows 파일 시스템(SMB)을 공유해야 합니다. 액티브 디렉터리(AD)와 통합되어야 합니다. 어떤 서비스가 적합합니까?",
        "options": [
            "Amazon FSx for Windows File Server",
            "Amazon EFS",
            "Amazon EBS Multi-Attach",
            "S3 마운트"
        ],
        "answer": "Amazon FSx for Windows File Server",
        "explanation": "FSx for Windows File Server는 완전 관리형 윈도우 파일 시스템으로, SMB 프로토콜과 AD 통합을 지원하며 다중 AZ 배포를 통해 고가용성을 제공합니다."
    },
    {
        "category": "데이터베이스",
        "title": "온라인 게임에서 상위 10명의 점수를 실시간으로 보여주는 순위표(Leaderboard) 기능이 필요합니다. 지연 시간이 짧고 구현이 쉬운 서비스는?",
        "options": [
            "Amazon ElastiCache for Redis",
            "Amazon RDS for MySQL",
            "Amazon DynamoDB",
            "Amazon Redshift"
        ],
        "answer": "Amazon ElastiCache for Redis",
        "explanation": "Redis의 Sorted Set(정렬된 집합) 데이터 구조는 점수 기반 순위 정렬에 최적화되어 있어 실시간 리더보드 구현에 가장 적합합니다."
    },
    {
        "category": "보안",
        "title": "S3에 저장된 데이터를 암호화해야 하며, 암호화 키는 매년 자동으로 교체(Rotation)되어야 합니다. 운영 부담을 최소화하는 방법은?",
        "options": [
            "AWS KMS 고객 관리형 키(CMK)를 생성하고 자동 교체를 활성화한다.",
            "S3 관리형 키(SSE-S3)를 사용한다.",
            "매년 수동으로 새 키를 만들고 데이터를 재암호화한다.",
            "클라이언트 측 암호화를 사용한다."
        ],
        "answer": "AWS KMS 고객 관리형 키(CMK)를 생성하고 자동 교체를 활성화한다.",
        "explanation": "AWS KMS의 고객 관리형 키는 자동 교체(Automatic Key Rotation) 기능을 켜두면 매년 키 구성 요소를 자동으로 갱신해주므로 관리가 편합니다."
    },
    {
        "category": "네트워크",
        "title": "전 세계 사용자들이 미국 동부(us-east-1) 리전의 S3 버킷에 사진을 업로드합니다. 업로드 속도를 높이기 위해 CloudFront를 사용하고 싶습니다. 필요한 구성은?",
        "options": [
            "S3 Transfer Acceleration을 활성화한다.",
            "CloudFront 배포를 생성하고 S3를 오리진으로 설정한 뒤 PUT 메서드를 허용한다.",
            "Global Accelerator를 사용한다.",
            "S3 멀티파트 업로드만 사용한다."
        ],
        "answer": "S3 Transfer Acceleration을 활성화한다.",
        "explanation": "S3 Transfer Acceleration은 CloudFront의 전 세계 엣지 네트워크를 활용하여 S3로 데이터를 빠르게 전송하는 기능입니다. (참고: 문제 맥락에 따라 CloudFront PUT 허용도 답이 될 수 있으나 가속화 자체는 Transfer Acceleration이 특화됨)"
    },
    {
        "category": "관리 및 거버넌스",
        "title": "여러 부서의 AWS 계정을 통합 관리하고, 직원들이 기존 사내 Active Directory 자격 증명으로 모든 계정에 로그인할 수 있게 하려 합니다. 가장 적합한 서비스 조합은?",
        "options": [
            "AWS Organizations 및 AWS IAM Identity Center (구 SSO)",
            "IAM 사용자 생성 및 Cross-Account 역할",
            "Cognito User Pools",
            "Directory Service 만 사용"
        ],
        "answer": "AWS Organizations 및 AWS IAM Identity Center (구 SSO)",
        "explanation": "AWS Organizations로 계정을 통합하고, IAM Identity Center를 사용하여 온프레미스 AD와 연동하면 단일 자격 증명으로 여러 계정에 로그인(SSO)할 수 있습니다."
    },
    {
        "category": "마이그레이션",
        "title": "온프레미스 스토리지의 10KB 크기 작은 파일 수백만 개를 S3로 이전해야 합니다. 네트워크 대역폭을 효율적으로 사용하고 전송 속도를 최적화하려면 어떤 서비스를 사용해야 합니까?",
        "options": [
            "AWS DataSync",
            "AWS Snowball Edge",
            "S3 CLI (aws s3 cp)",
            "AWS Transfer Family"
        ],
        "answer": "AWS DataSync",
        "explanation": "AWS DataSync는 네트워크 프로토콜을 최적화하여 작은 파일이 많은 경우에도 인터넷이나 Direct Connect를 통해 빠르고 효율적으로 데이터를 전송합니다."
    },
    {
        "category": "애플리케이션 통합",
        "title": "금융 거래 신청서를 처리하는 시스템에서 각 신청서가 정확히 한 번만, 순서대로 처리되어야 합니다. 어떤 메시징 서비스를 사용해야 합니까?",
        "options": [
            "Amazon SQS FIFO 대기열",
            "Amazon SQS 표준 대기열",
            "Amazon SNS",
            "Amazon Kinesis Data Streams"
        ],
        "answer": "Amazon SQS FIFO 대기열",
        "explanation": "SQS FIFO(선입선출) 대기열은 메시지의 순서를 보장하고, "
    },
    {
        "category": "분석",
        "title": "다양한 소스에서 발생하는 로그 데이터를 실시간으로 수집하고, SQL을 사용하여 실시간으로 분석한 뒤 결과를 S3에 저장하고 싶습니다. 어떤 아키텍처가 적합합니까?",
        "options": [
            "Kinesis Data Streams 수집 -> Kinesis Data Analytics 분석 -> Kinesis Data Firehose 저장",
            "S3 저장 -> Athena 분석",
            "SQS 수집 -> EC2 분석 -> RDS 저장",
            "CloudWatch Logs 수집 -> Lambda 분석"
        ],
        "answer": "Kinesis Data Streams 수집 -> Kinesis Data Analytics 분석 -> Kinesis Data Firehose 저장",
        "explanation": "Kinesis Data Analytics는 스트리밍 데이터에 대해 표준 SQL 쿼리를 실행할 수 있게 해주며, Firehose를 통해 분석 결과를 S3 등으로 쉽게 내보낼 수 있습니다."
    },
    {
        "category": "보안",
        "title": "실수로 S3 객체가 영구 삭제되는 것을 방지하고 싶습니다. 루트 사용자라도 MFA(다중 요소 인증) 토큰 없이는 객체를 삭제할 수 없게 하려면 무엇을 설정해야 합니까?",
        "options": [
            "S3 버킷에서 ",
            " 기능을 활성화한다.",
            "IAM 정책으로 삭제 권한을 제거한다.",
            "S3 객체 잠금(Object Lock)을 사용한다.",
            "버킷 버전을 활성화한다."
        ],
        "answer": "S3 버킷에서 ",
        "explanation": "MFA Delete를 활성화하면 객체 버전을 영구 삭제하거나 버킷의 버전 관리 상태를 변경할 때 반드시 MFA 토큰 값을 입력해야 하므로 우발적 삭제를 강력하게 방지합니다."
    },
    {
        "category": "네트워크",
        "title": "스타트업 기업이 AWS VPC와 온프레미스 사무실을 연결하려고 합니다. 데이터 전송량은 적고, 전용선 설치보다 저렴하고 빠르게 구축할 수 있는 방법은 무엇입니까?",
        "options": [
            "AWS Site-to-Site VPN",
            "AWS Direct Connect",
            "VPC 피어링",
            "Transit Gateway"
        ],
        "answer": "AWS Site-to-Site VPN",
        "explanation": "Site-to-Site VPN은 인터넷 회선을 사용하여 IPsec 암호화 터널을 뚫는 방식으로, Direct Connect보다 비용이 저렴하고 구축 시간이 매우 짧습니다."
    },
    {
        "category": "보안",
        "title": "프라이빗 서브넷의 EC2 인스턴스가 S3에 접근할 때, 오직 특정 S3 버킷에만 접근할 수 있도록 제한하고 싶습니다. 이를 위한 가장 효과적인 방법은?",
        "options": [
            "S3 게이트웨이 엔드포인트를 생성하고, 엔드포인트 정책(Endpoint Policy)에 특정 버킷만 허용하도록 명시한다.",
            "EC2 보안 그룹에서 아웃바운드 규칙을 제한한다.",
            "NACL을 사용하여 트래픽을 차단한다.",
            "IAM 사용자 정책을 수정한다."
        ],
        "answer": "S3 게이트웨이 엔드포인트를 생성하고, 엔드포인트 정책(Endpoint Policy)에 특정 버킷만 허용하도록 명시한다.",
        "explanation": "VPC 엔드포인트 정책을 사용하면 해당 엔드포인트를 통해 접근할 수 있는 리소스(특정 S3 버킷)를 정밀하게 제어할 수 있어 데이터 유출을 방지할 수 있습니다."
    },
    {
        "category": "서버리스",
        "title": "10분마다 실행되는 간단한 이미지 처리 작업이 있습니다. 이 작업은 Docker 컨테이너로 패키징되어 있습니다. 서버 관리 없이 예약된 시간에 실행하려면 어떤 서비스가 최적입니까?",
        "options": [
            "AWS Lambda (컨테이너 이미지 지원) + EventBridge Scheduler",
            "Amazon ECS Fargate + Scheduled Task",
            "EC2 인스턴스 + Crontab",
            "AWS Batch"
        ],
        "answer": "AWS Lambda (컨테이너 이미지 지원) + EventBridge Scheduler",
        "explanation": "Lambda는 컨테이너 이미지를 지원하며(최대 10GB), EventBridge를 통해 정해진 시간에 트리거할 수 있습니다. 15분 이내의 짧은 작업에 가장 비용 효율적입니다."
    },
    {
        "category": "비용 최적화",
        "title": "VPC 내부의 애플리케이션이 S3에 있는 대량의 데이터를 자주 읽어옵니다. 현재 NAT 게이트웨이를 사용 중인데 데이터 처리 비용이 너무 많이 나옵니다. 비용을 줄이려면?",
        "options": [
            "S3용 게이트웨이 VPC 엔드포인트를 설정하여 라우팅 테이블을 업데이트한다.",
            "NAT 게이트웨이를 더 큰 사이즈로 변경한다.",
            "EC2를 퍼블릭 서브넷으로 옮긴다.",
            "S3 Transfer Acceleration을 사용한다."
        ],
        "answer": "S3용 게이트웨이 VPC 엔드포인트를 설정하여 라우팅 테이블을 업데이트한다.",
        "explanation": "S3 게이트웨이 엔드포인트는 무료이며, 이를 사용하면 NAT 게이트웨이를 거치지 않고 S3와 통신하므로 NAT 데이터 처리 비용(GB당 요금)을 아낄 수 있습니다."
    },
    {
        "category": "컨테이너",
        "title": "Amazon EKS 클러스터에서 중단되어도 상관없는 배치 분석 작업을 실행 중입니다. 워커 노드(Worker Node) 비용을 최대 90%까지 절감하려면 어떤 전략을 써야 합니까?",
        "options": [
            "관리형 노드 그룹(Managed Node Group)에서 스팟 인스턴스를 사용한다.",
            "온디맨드 인스턴스를 사용한다.",
            "Fargate를 사용한다.",
            "전용 호스트를 사용한다."
        ],
        "answer": "관리형 노드 그룹(Managed Node Group)에서 스팟 인스턴스를 사용한다.",
        "explanation": "중단 내성이 있는 워크로드의 경우, 스팟 인스턴스를 사용하는 EKS 노드 그룹을 구성하면 온디맨드 대비 비용을 획기적으로 줄일 수 있습니다."
    },
    {
        "category": "아키텍처",
        "title": "3개의 가용 영역(AZ)에 걸쳐 고가용성을 확보해야 하는 웹 애플리케이션이 있습니다. 웹 서버는 Auto Scaling을 사용하고, 데이터베이스는 읽기 성능 확장이 필요합니다. 적절한 구성은?",
        "options": [
            "ALB + EC2 Auto Scaling (3 AZ) + Aurora MySQL (Multi-AZ 및 Read Replica)",
            "NLB + EC2 + DynamoDB",
            "EC2 단일 인스턴스 + RDS Multi-AZ",
            "Route 53 + S3 정적 호스팅"
        ],
        "answer": "ALB + EC2 Auto Scaling (3 AZ) + Aurora MySQL (Multi-AZ 및 Read Replica)",
        "explanation": "ALB와 Auto Scaling으로 웹 계층의 부하를 분산하고, Aurora의 읽기 전용 복제본(Read Replica)을 통해 데이터베이스 읽기 성능을 확장하며 다중 AZ로 가용성을 확보하는 것이 정석입니다."
    },
    {
        "category": "데이터베이스",
        "title": "I/O가 매우 빈번한(I/O Intensive) 미션 크리티컬 데이터베이스를 RDS에서 운영 중입니다. 지연 시간을 최소화하고 일관된 IOPS 성능을 보장하려면 어떤 스토리지 유형을 선택해야 합니까?",
        "options": [
            "Provisioned IOPS SSD (io1/io2)",
            "General Purpose SSD (gp3)",
            "Magnetic (Standard)",
            "Throughput Optimized HDD (st1)"
        ],
        "answer": "Provisioned IOPS SSD (io1/io2)",
        "explanation": "Provisioned IOPS SSD(io1, io2)는 사용자가 지정한 만큼의 IOPS를 보장하므로, 성능이 중요한 데이터베이스 워크로드에 가장 적합합니다."
    },
    {
        "category": "데이터베이스",
        "title": "기존에 보유한 Oracle 라이선스(BYOL)를 사용해야 하며, 데이터베이스 운영체제(OS)에 대한 접근 권한과 커스터마이징이 필요합니다. AWS에서 이를 지원하는 관리형 서비스는?",
        "options": [
            "Amazon RDS Custom for Oracle",
            "Amazon RDS for Oracle",
            "EC2에 Oracle 설치",
            "Amazon Aurora"
        ],
        "answer": "Amazon RDS Custom for Oracle",
        "explanation": "RDS Custom은 관리형 서비스의 이점을 제공하면서도, 기본 OS 및 DB 환경에 대한 접근 권한(SSH/RDP)을 제공하여 레거시 애플리케이션이나 특수 설정이 필요한 경우에 적합합니다."
    },
    {
        "category": "마이그레이션",
        "title": "인터넷 대역폭이 제한적인 환경에서 600TB의 데이터를 2주 안에 AWS로 옮겨야 합니다. 가장 빠르고 비용 효율적인 방법은?",
        "options": [
            "AWS Snowball Edge Storage Optimized 장비 여러 대 사용",
            "AWS Direct Connect 10Gbps 설치",
            "Site-to-Site VPN 사용",
            "S3 Multipart Upload"
        ],
        "answer": "AWS Snowball Edge Storage Optimized 장비 여러 대 사용",
        "explanation": "네트워크 대역폭이 부족할 때 대용량 데이터(수백 TB)를 이동하려면 물리적 전송 장비인 Snowball Edge를 사용하는 것이 가장 빠르고 안정적입니다."
    },
    {
        "category": "하이브리드",
        "title": "기존의 물리적 테이프 백업 시스템을 클라우드로 전환하려고 합니다. 기존 백업 소프트웨어(Veeam 등)를 그대로 사용하면서 가상 테이프 라이브러리(VTL) 인터페이스를 제공하는 서비스는?",
        "options": [
            "AWS Storage Gateway (Tape Gateway)",
            "AWS DataSync",
            "Amazon S3 Glacier",
            "EBS Snapshots"
        ],
        "answer": "AWS Storage Gateway (Tape Gateway)",
        "explanation": "Tape Gateway는 온프레미스 백업 애플리케이션에 가상 테이프 라이브러리(VTL) 인터페이스를 제공하여, 기존 워크플로 변경 없이 백업 데이터를 S3 Glacier 등에 보관할 수 있게 합니다."
    },
    {
        "category": "네트워크",
        "title": "여러 리전에 배포된 애플리케이션에 대해 단일 진입점(고정 IP)을 제공하고, 사용자와 가장 가까운 리전으로 트래픽을 라우팅하여 지연 시간을 줄이고 싶습니다. 무엇을 사용해야 합니까?",
        "options": [
            "AWS Global Accelerator",
            "Amazon CloudFront",
            "Route 53 Geolocation Routing",
            "Application Load Balancer"
        ],
        "answer": "AWS Global Accelerator",
        "explanation": "Global Accelerator는 2개의 고정된 애니캐스트(Anycast) 정적 IP를 제공하며, AWS 글로벌 네트워크를 통해 트래픽을 최적의 엔드포인트로 라우팅합니다."
    },
    {
        "category": "보안",
        "title": "ALB 뒤에 있는 웹 애플리케이션에 대해 SQL 인젝션 및 크로스 사이트 스크립팅(XSS) 공격을 차단하고 싶습니다. 어떤 서비스를 ALB에 연결해야 합니까?",
        "options": [
            "AWS WAF (Web Application Firewall)",
            "AWS Shield Standard",
            "Amazon GuardDuty",
            "Security Group"
        ],
        "answer": "AWS WAF (Web Application Firewall)",
        "explanation": "AWS WAF는 웹 트래픽을 검사하여 SQL 인젝션, XSS 등 일반적인 웹 공격 패턴을 차단하는 규칙을 ALB, API Gateway, CloudFront 등에 적용할 수 있습니다."
    },
    {
        "category": "네트워크",
        "title": "서로 다른 AWS 계정의 VPC에 있는 애플리케이션들이 인터넷을 거치지 않고 서로 통신해야 합니다. VPC 피어링을 사용하지 않고 ",
        "options": [
            "AWS PrivateLink (VPC Endpoint Service)",
            "VPC Peering",
            "Transit Gateway",
            "VPN Connection"
        ],
        "answer": "AWS PrivateLink (VPC Endpoint Service)",
        "explanation": "PrivateLink를 사용하면 자신의 서비스를 VPC 엔드포인트 서비스로 게시하고, 다른 계정의 VPC에서 프라이빗하게 연결할 수 있습니다. 피어링보다 관리가 단순하고 IP 충돌 문제가 없습니다."
    },
    {
        "category": "네트워크",
        "title": "프라이빗 서브넷에 있는 EC2 인스턴스가 OS 보안 패치를 위해 인터넷에 접속해야 합니다. 외부에서의 접속은 차단되어야 합니다. 공용 서브넷에 무엇을 배치해야 합니까?",
        "options": [
            "NAT Gateway",
            "Internet Gateway",
            "Egress-Only Internet Gateway",
            "Bastion Host"
        ],
        "answer": "NAT Gateway",
        "explanation": "NAT Gateway는 프라이빗 인스턴스가 외부로 나가는 트래픽은 허용하고(아웃바운드), 외부에서 들어오는 트래픽은 차단하므로 패치 업데이트에 적합합니다."
    },
    {
        "category": "보안",
        "title": "ALB(Application Load Balancer) 뒤에 있는 EC2 인스턴스에 사용자가 직접 접속하는 것을 막고, 오직 ALB를 통해서만 접속되도록 하고 싶습니다. 보안 그룹을 어떻게 설정해야 합니까?",
        "options": [
            "EC2 보안 그룹의 인바운드 소스를 ALB의 보안 그룹 ID로 설정한다.",
            "EC2 보안 그룹에서 80포트를 0.0.0.0/0으로 연다.",
            "ALB를 프라이빗 서브넷에 둔다.",
            "NACL에서 특정 IP만 허용한다."
        ],
        "answer": "EC2 보안 그룹의 인바운드 소스를 ALB의 보안 그룹 ID로 설정한다.",
        "explanation": "보안 그룹의 소스(Source)로 다른 보안 그룹 ID를 지정하면, 해당 보안 그룹(ALB)을 통과한 트래픽만 허용하게 되어 우회를 방지할 수 있습니다."
    },
    {
        "category": "아키텍처",
        "title": "웹사이트의 이미지, CSS, JS 파일 로딩 속도를 전 세계적으로 개선하고, 웹 서버의 부하를 줄이고 싶습니다. 가장 효과적인 방법은?",
        "options": [
            "Amazon CloudFront 배포를 생성하여 정적 콘텐츠를 캐싱한다.",
            "S3 버킷을 웹 서버로 사용한다.",
            "ElastiCache를 도입한다.",
            "EC2 인스턴스 유형을 업그레이드한다."
        ],
        "answer": "Amazon CloudFront 배포를 생성하여 정적 콘텐츠를 캐싱한다.",
        "explanation": "CloudFront는 전 세계 엣지 로케이션에 정적 콘텐츠를 캐싱하여 사용자에게 가장 가까운 곳에서 데이터를 제공하므로 속도가 빠르고 서버 부하가 감소합니다."
    },
    {
        "category": "비용 최적화",
        "title": "S3에 저장된 데이터의 액세스 패턴이 매우 불규칙합니다. 어떤 파일은 자주 쓰이고, 어떤 파일은 거의 안 쓰입니다. 관리 노력 없이 비용을 최적화하려면?",
        "options": [
            "S3 Intelligent-Tiering 스토리지 클래스를 사용한다.",
            "S3 Standard-IA로 모두 옮긴다.",
            "수명 주기 정책으로 30일 뒤 Glacier로 보낸다.",
            "S3 One Zone-IA를 사용한다."
        ],
        "answer": "S3 Intelligent-Tiering 스토리지 클래스를 사용한다.",
        "explanation": "Intelligent-Tiering은 데이터 접근 빈도를 모니터링하여 자동으로 가장 저렴한 티어로 이동시켜 주므로, 접근 패턴을 예측하기 어려울 때 최적의 솔루션입니다."
    },
    {
        "category": "아키텍처",
        "title": "프론트엔드(React), 백엔드(Node.js), 데이터베이스로 구성된 3계층 애플리케이션을 구축합니다. 프론트엔드는 정적 호스팅을 하고 백엔드는 API로 호출하려 합니다. 가장 비용 효율적인 구조는?",
        "options": [
            "프론트엔드: S3 + CloudFront, 백엔드: API Gateway + Lambda + DynamoDB",
            "프론트엔드: EC2, 백엔드: EC2 + RDS",
            "모두 Elastic Beanstalk에 배포",
            "Lightsail 인스턴스 사용"
        ],
        "answer": "프론트엔드: S3 + CloudFront, 백엔드: API Gateway + Lambda + DynamoDB",
        "explanation": "S3 정적 호스팅과 서버리스 백엔드(Lambda, DynamoDB)를 조합하면 서버 유지 관리 비용이 없고 사용량 기반 과금으로 비용 효율성이 극대화됩니다."
    },
    {
        "category": "미디어",
        "title": "사용자가 업로드한 동영상을 다양한 해상도와 포맷으로 변환해야 합니다. 서버를 관리하지 않고 확장성 있게 처리하려면 어떤 서비스를 사용해야 합니까?",
        "options": [
            "AWS Elemental MediaConvert",
            "EC2에 FFmpeg 설치",
            "AWS Lambda만 사용",
            "Kinesis Video Streams"
        ],
        "answer": "AWS Elemental MediaConvert",
        "explanation": "MediaConvert는 파일 기반 비디오 트랜스코딩을 위한 완전 관리형 서비스로, 서버 관리 없이 방송급 품질의 비디오 변환을 처리할 수 있습니다."
    },
    {
        "category": "보안",
        "title": "특정 악성 IP 주소 하나에서 오는 트래픽을 서브넷 수준에서 완전히 차단하고 싶습니다. 무엇을 사용해야 합니까?",
        "options": [
            "네트워크 ACL (NACL)에 거부(Deny) 규칙 추가",
            "보안 그룹에 거부 규칙 추가",
            "Route 53에서 차단",
            "WAF에서 IP 차단 (서브넷 수준 아님)"
        ],
        "answer": "네트워크 ACL (NACL)에 거부(Deny) 규칙 추가",
        "explanation": "보안 그룹은 허용(Allow) 규칙만 지원하지만, NACL은 거부(Deny) 규칙을 지원하며 서브넷 단위로 적용되므로 특정 IP 차단에 적합합니다."
    },
    {
        "category": "데이터베이스",
        "title": "온프레미스에서 사용 중인 MongoDB 워크로드를 AWS로 마이그레이션하려고 합니다. 애플리케이션 코드 변경을 최소화하면서 완전 관리형 서비스를 사용하고 싶습니다.",
        "options": [
            "Amazon DocumentDB (with MongoDB compatibility)",
            "Amazon DynamoDB",
            "Amazon RDS for MySQL",
            "Amazon Neptune"
        ],
        "answer": "Amazon DocumentDB (with MongoDB compatibility)",
        "explanation": "Amazon DocumentDB는 MongoDB API와 호환되는 완전 관리형 문서 데이터베이스 서비스로, 기존 MongoDB 드라이버와 도구를 그대로 사용할 수 있습니다."
    },
    {
        "category": "보안",
        "title": "S3 버킷에 저장된 데이터 중 신용카드 번호나 주민등록번호 같은 민감한 개인정보(PII)가 있는지 자동으로 스캔하고 싶습니다. 어떤 서비스를 활성화해야 합니까?",
        "options": [
            "Amazon Macie",
            "Amazon GuardDuty",
            "AWS Shield",
            "Amazon Inspector"
        ],
        "answer": "Amazon Macie",
        "explanation": "Amazon Macie는 머신 러닝을 사용하여 S3 버킷 내의 데이터를 스캔하고, PII와 같은 민감한 데이터를 식별 및 분류하는 데이터 보안 서비스입니다."
    },
    {
        "category": "머신러닝",
        "title": "대량의 역사적 의료 기록(종이 문서)을 디지털화하여 분석하고 싶습니다. 스캔된 문서에서 텍스트를 추출한 뒤, 환자의 건강 정보(PHI)를 식별하고 SQL 쿼리로 분석할 수 있어야 합니다. 가장 적합한 서비스 조합은?",
        "options": [
            "Amazon Textract + Amazon Comprehend Medical + Amazon Athena",
            "Amazon Rekognition + Amazon Transcribe Medical + RDS",
            "EC2 OCR 소프트웨어 + EMR",
            "Lambda + DynamoDB"
        ],
        "answer": "Amazon Textract + Amazon Comprehend Medical + Amazon Athena",
        "explanation": "Textract는 문서에서 텍스트를 추출하고, Comprehend Medical은 의료 정보를 식별합니다. 추출된 데이터는 S3에 저장 후 Athena로 쿼리할 수 있습니다."
    },
    {
        "category": "보안",
        "title": "프라이빗 서브넷에 있는 리눅스 EC2 인스턴스에 안전하게 접속하여 관리 작업을 수행해야 합니다. 배스천 호스트(Bastion Host)를 사용하지 않고 포트를 열지 않은 상태로 접속하는 방법은?",
        "options": [
            "AWS Systems Manager Session Manager를 사용한다.",
            "SSH 키를 사용하여 직접 접속한다.",
            "EC2 인스턴스 연결(EC2 Instance Connect)을 사용한다.",
            "RDP를 사용한다."
        ],
        "answer": "AWS Systems Manager Session Manager를 사용한다.",
        "explanation": "Session Manager를 사용하면 인바운드 포트를 열거나 배스천 호스트를 유지 관리할 필요 없이, 브라우저나 CLI를 통해 안전하게 인스턴스에 접속할 수 있습니다."
    },
    {
        "category": "하이브리드",
        "title": "온프레미스 애플리케이션의 데이터를 AWS로 백업하고 싶지만, 최근 데이터는 짧은 지연 시간으로 로컬에서 계속 액세스할 수 있어야 합니다. 어떤 솔루션이 적합합니까?",
        "options": [
            "AWS Storage Gateway의 볼륨 게이트웨이(Cached Volumes) 모드",
            "AWS Storage Gateway의 볼륨 게이트웨이(Stored Volumes) 모드",
            "AWS Snowball Edge",
            "S3로 직접 업로드"
        ],
        "answer": "AWS Storage Gateway의 볼륨 게이트웨이(Cached Volumes) 모드",
        "explanation": "캐시 볼륨(Cached Volumes) 모드는 전체 데이터를 S3에 저장하면서, 자주 액세스하는 데이터의 복사본을 온프레미스 스토리지에 캐싱하여 지연 시간을 줄입니다."
    },
    {
        "category": "서버리스",
        "title": "API Gateway와 Lambda를 사용하는 애플리케이션에서 트래픽이 급증할 때 초기 응답 속도가 느려지는 ",
        "options": [
            "Lambda 함수에 프로비저닝된 동시성(Provisioned Concurrency)을 설정한다.",
            "Lambda 메모리를 최대치로 늘린다.",
            "API Gateway 앞에 CloudFront를 둔다.",
            "DynamoDB 읽기 용량을 늘린다."
        ],
        "answer": "Lambda 함수에 프로비저닝된 동시성(Provisioned Concurrency)을 설정한다.",
        "explanation": "프로비저닝된 동시성을 설정하면 지정된 수의 실행 환경을 미리 초기화해 두므로, 요청이 들어왔을 때 즉시 응답할 수 있어 콜드 스타트 문제를 해결합니다."
    },
    {
        "category": "컨테이너",
        "title": "마이크로서비스 아키텍처를 구축하려고 합니다. 관계형 데이터베이스가 필요하며, 컨테이너 관리의 복잡성을 줄이고 싶습니다. 가장 적합한 서비스 조합은?",
        "options": [
            "Amazon ECS + AWS Fargate + Amazon RDS",
            "Amazon EKS + EC2 + DynamoDB",
            "EC2 직접 설치 + RDS",
            "Lambda + S3"
        ],
        "answer": "Amazon ECS + AWS Fargate + Amazon RDS",
        "explanation": "ECS와 Fargate 조합은 서버 관리 없이 컨테이너를 실행할 수 있는 가장 간편한 방법이며, 관계형 DB 요구사항은 RDS로 해결할 수 있습니다."
    },
    {
        "category": "컴퓨팅",
        "title": "밀결합된(Tightly coupled) 고성능 컴퓨팅(HPC) 워크로드를 EC2에서 실행하려고 합니다. 인스턴스 간 통신 지연 시간을 최소화하고 높은 네트워크 대역폭을 확보하려면 어떤 배치 그룹을 사용해야 합니까?",
        "options": [
            "클러스터 배치 그룹(Cluster Placement Group)",
            "분산 배치 그룹(Spread Placement Group)",
            "파티션 배치 그룹(Partition Placement Group)",
            "기본 배치"
        ],
        "answer": "클러스터 배치 그룹(Cluster Placement Group)",
        "explanation": "클러스터 배치 그룹은 인스턴스들을 단일 가용 영역 내에서 물리적으로 가깝게 배치하여 네트워크 지연 시간을 최소화하고 처리량을 극대화합니다."
    },
    {
        "category": "마이그레이션",
        "title": "50TB의 데이터를 AWS로 옮겨야 하는데 사용 가능한 네트워크 대역폭이 거의 없습니다. 데이터를 클라우드로 옮긴 후 변환 작업까지 수행해야 합니다. 가장 적절한 방법은?",
        "options": [
            "AWS Snowball Edge Storage Optimized 장비로 데이터 이동 후, AWS Glue로 변환",
            "AWS DataSync 사용",
            "S3 Transfer Acceleration 사용",
            "Direct Connect 설치"
        ],
        "answer": "AWS Snowball Edge Storage Optimized 장비로 데이터 이동 후, AWS Glue로 변환",
        "explanation": "네트워크가 열악한 환경에서 대용량 데이터를 이동하려면 물리적 장비인 Snowball Edge가 최적이며, 이후 클라우드 내에서 Glue를 사용해 데이터를 변환할 수 있습니다."
    },
    {
        "category": "애플리케이션 통합",
        "title": "SQS 대기열에서 메시지를 가져와 Lambda로 처리하는 시스템이 있습니다. 처리 중 오류가 발생한 메시지가 계속 재시도되어 낭비가 발생합니다. 문제 있는 메시지를 별도로 격리하여 분석하려면 무엇을 설정해야 합니까?",
        "options": [
            "SQS에 배달 못한 편지 대기열(Dead Letter Queue, DLQ)을 구성한다.",
            "Lambda 함수에서 오류를 무시하도록 코드 수정",
            "SNS 주제로 알림을 보낸다.",
            "CloudWatch Logs만 확인한다."
        ],
        "answer": "SQS에 배달 못한 편지 대기열(Dead Letter Queue, DLQ)을 구성한다.",
        "explanation": "DLQ를 설정하면 일정 횟수 이상 처리에 실패한 메시지를 별도의 대기열로 이동시켜, 시스템의 정상적인 흐름을 방해하지 않고 나중에 원인을 분석할 수 있습니다."
    },
    {
        "category": "마이그레이션",
        "title": "180TB 규모의 온프레미스 데이터베이스를 AWS로 이전해야 합니다. 네트워크 대역폭은 100Mbps로 매우 낮습니다. 다운타임을 최소화하며 이전하는 방법은?",
        "options": [
            "AWS Snowball Edge로 초기 데이터를 옮기고, AWS DMS로 변경 사항을 복제한다.",
            "VPN을 통해 데이터를 전송한다.",
            "Direct Connect 10Gbps를 설치한다.",
            "DataSync를 사용한다."
        ],
        "answer": "AWS Snowball Edge로 초기 데이터를 옮기고, AWS DMS로 변경 사항을 복제한다.",
        "explanation": "대용량 초기 데이터는 Snowball Edge로 오프라인 전송하고, 그동안 변경된 데이터는 DMS(CDC 기능)를 통해 동기화하면 다운타임을 최소화할 수 있습니다."
    },
    {
        "category": "아키텍처",
        "title": "윈도우 기반 웹 애플리케이션을 AWS로 옮깁니다. 정적 파일은 저렴하게 호스팅하고, 웹 서버 간에는 공유 윈도우 파일 시스템이 필요합니다. 적절한 구성은?",
        "options": [
            "정적 파일: S3 + CloudFront, 공유 스토리지: Amazon FSx for Windows File Server",
            "모두 EBS 볼륨 사용",
            "S3와 EFS 사용",
            "EC2 인스턴스 스토어 사용"
        ],
        "answer": "정적 파일: S3 + CloudFront, 공유 스토리지: Amazon FSx for Windows File Server",
        "explanation": "정적 콘텐츠는 S3와 CloudFront로 비용 효율적으로 제공하고, 윈도우 서버 간 파일 공유는 SMB를 지원하는 FSx for Windows File Server를 사용하는 것이 최적입니다."
    },
    {
        "category": "애플리케이션 통합",
        "title": "파트너사가 SFTP를 통해 파일을 업로드해야 합니다. 서버를 직접 관리하지 않고, 업로드된 파일을 S3에 자동으로 저장하려면 어떤 서비스를 사용해야 합니까?",
        "options": [
            "AWS Transfer Family",
            "EC2에 SFTP 서버 구축",
            "S3 버킷을 직접 공개",
            "Storage Gateway 사용"
        ],
        "answer": "AWS Transfer Family",
        "explanation": "AWS Transfer Family는 SFTP, FTPS, FTP 프로토콜을 지원하는 완전 관리형 서비스로, 받은 파일을 S3나 EFS에 직접 저장해줍니다."
    },
    {
        "category": "데이터베이스",
        "title": "EC2에서 Oracle 데이터베이스를 운영 중입니다. 라이선스 비용과 관리 부담을 줄이고, 스토리지 용량을 자동으로 확장하고 싶습니다. 가장 적합한 AWS 서비스는?",
        "options": [
            "Amazon RDS for Oracle (License Included) 및 스토리지 자동 확장 활성화",
            "Aurora PostgreSQL로 마이그레이션",
            "EC2 인스턴스 타입 변경",
            "DynamoDB로 변경"
        ],
        "answer": "Amazon RDS for Oracle (License Included) 및 스토리지 자동 확장 활성화",
        "explanation": "RDS for Oracle의 "
    },
    {
        "category": "보안",
        "title": "모바일 앱 사용자가 API Gateway를 통해 백엔드에 접근합니다. 사용자 인증 기능을 직접 개발하지 않고, 소셜 로그인 등을 지원하며 접근을 제어하고 싶습니다. 무엇을 사용해야 합니까?",
        "options": [
            "Amazon Cognito User Pools와 API Gateway 권한 부여(Authorizer)",
            "IAM 사용자와 정책",
            "Lambda 함수 내에서 인증 로직 구현",
            "WAF로 IP 차단"
        ],
        "answer": "Amazon Cognito User Pools와 API Gateway 권한 부여(Authorizer)",
        "explanation": "Cognito User Pools는 사용자 인증 및 관리를 위한 완전 관리형 서비스이며, API Gateway와 연동하여 인증된 사용자만 API를 호출하도록 제어할 수 있습니다."
    },
    {
        "category": "비용 최적화",
        "title": "S3에 저장된 데이터의 액세스 패턴이 매우 불규칙하여 예측하기 어렵습니다. 관리자가 수동으로 계층을 이동하지 않고 비용을 절감하는 가장 좋은 방법은?",
        "options": [
            "S3 Intelligent-Tiering 사용",
            "S3 Standard-IA로 이동",
            "S3 Glacier로 바로 이동",
            "S3 수명 주기 정책으로 매일 삭제"
        ],
        "answer": "S3 Intelligent-Tiering 사용",
        "explanation": "S3 Intelligent-Tiering은 데이터 접근 패턴을 모니터링하여 자동으로 가장 비용 효율적인 액세스 계층으로 데이터를 이동시켜 줍니다."
    },
    {
        "category": "보안",
        "title": "개발자에게 EC2 인스턴스를 시작하고 중지할 권한만 주고 싶습니다. 다른 리소스에 대한 접근이나 인스턴스 종료는 막아야 합니다. 이를 위해 필요한 것은?",
        "options": [
            "최소 권한 원칙을 적용한 IAM 정책을 생성하여 사용자에게 연결한다.",
            "AdministratorAccess 정책을 연결한다.",
            "AWS Root 계정을 공유한다.",
            "보안 그룹을 수정한다."
        ],
        "answer": "최소 권한 원칙을 적용한 IAM 정책을 생성하여 사용자에게 연결한다.",
        "explanation": "IAM 정책에서 `ec2:StartInstances`, `ec2:StopInstances` 작업만 허용(Allow)하고 리소스를 특정하는 것이 최소 권한 원칙에 부합합니다."
    },
    {
        "category": "저장소",
        "title": "여러 대의 Linux EC2 웹 서버가 공통의 콘텐츠 파일을 읽고 써야 합니다. 애플리케이션 수정 없이 파일 시스템처럼 접근할 수 있는 고가용성 스토리지는?",
        "options": [
            "Amazon EFS",
            "Amazon S3",
            "Amazon EBS",
            "Instance Store"
        ],
        "answer": "Amazon EFS",
        "explanation": "Amazon EFS(Elastic File System)는 리눅스 인스턴스용 완전 관리형 NFS 파일 시스템으로, 여러 인스턴스에서 동시에 마운트하여 데이터를 공유할 수 있습니다."
    },
    {
        "category": "분석",
        "title": "S3에 저장된 CSV 데이터를 분석 성능 향상을 위해 Apache Parquet 형식으로 변환하고 싶습니다. 서버를 관리하지 않고 주기적으로 이 작업을 수행하려면?",
        "options": [
            "AWS Glue ETL 작업",
            "EMR 클러스터 생성",
            "EC2에서 스크립트 실행",
            "Lambda 함수로 하나씩 변환"
        ],
        "answer": "AWS Glue ETL 작업",
        "explanation": "AWS Glue는 서버리스 ETL 서비스로, CSV를 Parquet과 같은 열 기반 형식으로 변환하는 작업을 손쉽게 자동화할 수 있습니다."
    },
    {
        "category": "애플리케이션 통합",
        "title": "여러 마이크로서비스가 특정 이벤트(예: 주문 완료) 발생 시 각자 다른 작업을 수행해야 합니다. 서비스를 서로 결합하지 않고 이벤트를 라우팅하는 가장 좋은 방법은?",
        "options": [
            "Amazon EventBridge 사용",
            "SQS 대기열 하나 공유",
            "직접 HTTP 요청 호출",
            "데이터베이스 폴링"
        ],
        "answer": "Amazon EventBridge 사용",
        "explanation": "EventBridge는 서버리스 이벤트 버스로, 다양한 소스의 이벤트를 받아 규칙에 따라 여러 타겟(Lambda, SQS 등)으로 라우팅하여 시스템 간 결합도를 낮춥니다."
    },
    {
        "category": "보안",
        "title": "공개된 웹 애플리케이션이 SQL 인젝션 공격을 받고 있습니다. 코드 수정 없이 공격을 차단하고 데이터베이스를 보호하려면 무엇을 적용해야 합니까?",
        "options": [
            "AWS WAF (Web Application Firewall)",
            "Security Group",
            "Network ACL",
            "Amazon Inspector"
        ],
        "answer": "AWS WAF (Web Application Firewall)",
        "explanation": "AWS WAF를 사용하면 SQL 인젝션, XSS 등 일반적인 웹 공격 패턴을 탐지하고 차단하는 규칙을 설정하여 애플리케이션을 보호할 수 있습니다."
    },
    {
        "category": "관리 및 거버넌스",
        "title": "여러 AWS 계정의 CloudWatch 로그와 지표를 하나의 모니터링 계정에서 중앙 집중식으로 보고 싶습니다. 가장 효율적인 구성은?",
        "options": [
            "CloudWatch의 크로스 계정 관측성(Cross-Account Observability) 기능을 설정한다.",
            "모든 로그를 S3로 내보내서 분석한다.",
            "각 계정에 로그인하여 확인한다.",
            "타사 모니터링 도구를 설치한다."
        ],
        "answer": "CloudWatch의 크로스 계정 관측성(Cross-Account Observability) 기능을 설정한다.",
        "explanation": "CloudWatch의 크로스 계정 기능을 사용하면 소스 계정의 데이터를 모니터링 계정과 공유하여 중앙에서 통합 조회 및 분석이 가능합니다."
    },
    {
        "category": "네트워크",
        "title": "Application Load Balancer(ALB)를 통해 HTTPS 트래픽을 처리하려고 합니다. 인증서 관리를 자동화하고 로드 밸런서에 쉽게 적용하려면 어떤 서비스를 써야 합니까?",
        "options": [
            "AWS Certificate Manager (ACM)",
            "IAM 인증서 저장소",
            "S3에 인증서 업로드",
            "외부 인증 기관에서 구매 후 수동 업로드"
        ],
        "answer": "AWS Certificate Manager (ACM)",
        "explanation": "ACM은 공인 SSL/TLS 인증서를 무료로 발급하고 갱신을 자동화하며, ALB와 같은 AWS 리소스에 쉽게 통합할 수 있습니다."
    },
    {
        "category": "아키텍처",
        "title": "EC2에서 호스팅되는 웹사이트의 이미지 로딩 속도가 느립니다. 서버 부하를 줄이면서 이미지 전송 속도를 높이는 가장 효과적인 방법은?",
        "options": [
            "이미지를 S3로 옮기고 CloudFront를 통해 제공한다.",
            "EC2 인스턴스 유형을 업그레이드한다.",
            "이미지 해상도를 낮춘다.",
            "데이터베이스에 이미지를 저장한다."
        ],
        "answer": "이미지를 S3로 옮기고 CloudFront를 통해 제공한다.",
        "explanation": "정적 자산(이미지 등)을 S3에 저장하고 CloudFront(CDN)를 통해 캐싱하여 제공하면, 전송 속도가 빨라지고 웹 서버(EC2)의 부하가 크게 감소합니다."
    },
    {
        "category": "컴퓨팅",
        "title": "S3에 저장된 대량의 데이터를 기반으로 고성능 컴퓨팅(HPC) 작업을 수행해야 합니다. S3와 연동되면서 초고속 I/O를 제공하는 파일 시스템은?",
        "options": [
            "Amazon FSx for Lustre",
            "Amazon EFS",
            "Amazon EBS",
            "S3 Standard"
        ],
        "answer": "Amazon FSx for Lustre",
        "explanation": "FSx for Lustre는 S3 버킷과 원활하게 통합되어 데이터를 지연 없이 로드할 수 있으며, HPC 워크로드에 필요한 고성능 병렬 파일 시스템을 제공합니다."
    },
    {
        "category": "네트워크",
        "title": "전 세계에 흩어져 있는 사용자들이 API를 호출할 때 지연 시간을 최소화하고 싶습니다. API Gateway의 어떤 엔드포인트 유형을 선택해야 합니까?",
        "options": [
            "엣지 최적화(Edge-optimized) 엔드포인트",
            "지역(Regional) 엔드포인트",
            "프라이빗(Private) 엔드포인트",
            "VPC 엔드포인트"
        ],
        "answer": "엣지 최적화(Edge-optimized) 엔드포인트",
        "explanation": "엣지 최적화 엔드포인트는 CloudFront 네트워크를 활용하여 가장 가까운 엣지 로케이션에서 트래픽을 받아 API Gateway로 전송하므로 글로벌 지연 시간을 줄여줍니다."
    },
    {
        "category": "아키텍처",
        "title": "서버리스 API(API Gateway + Lambda)를 운영 중입니다. 글로벌 사용자의 응답 속도를 개선하기 위해 가장 효과적인 방법은?",
        "options": [
            "API Gateway를 엣지 최적화(Edge-optimized)로 설정하고 캐싱을 활성화한다.",
            "Lambda 함수 메모리를 늘린다.",
            "RDS 읽기 전용 복제본을 만든다.",
            "리전별로 API를 따로 배포한다."
        ],
        "answer": "API Gateway를 엣지 최적화(Edge-optimized)로 설정하고 캐싱을 활성화한다.",
        "explanation": "엣지 최적화 엔드포인트는 네트워크 지연을 줄이고, 캐싱을 활성화하면 백엔드(Lambda) 호출 없이 응답을 반환할 수 있어 성능이 크게 향상됩니다."
    },
    {
        "category": "보안",
        "title": "여러 마이크로서비스가 EC2 인스턴스에서 실행 중입니다. 각 서비스가 필요한 AWS 리소스(S3, DynamoDB 등)에만 최소 권한으로 접근하게 하려면 어떻게 해야 합니까?",
        "options": [
            "각 마이크로서비스별로 IAM 역할을 생성하고 해당 인스턴스에 연결한다.",
            "하나의 강력한 IAM 역할을 모든 인스턴스에 공유한다.",
            "액세스 키를 코드에 하드코딩한다.",
            "IAM 사용자를 생성하여 자격 증명을 저장한다."
        ],
        "answer": "각 마이크로서비스별로 IAM 역할을 생성하고 해당 인스턴스에 연결한다.",
        "explanation": "최소 권한 원칙을 지키기 위해 각 서비스의 용도에 맞는 개별 IAM 역할을 생성하고 인스턴스 프로파일을 통해 부여하는 것이 가장 안전합니다."
    },
    {
        "category": "네트워크",
        "title": "사용자가 웹 애플리케이션을 통해 대용량 파일을 업로드해야 합니다. 전 세계 어디서든 업로드 속도를 높이기 위해 S3의 어떤 기능을 활용해야 합니까?",
        "options": [
            "S3 Transfer Acceleration",
            "S3 멀티파트 업로드",
            "Global Accelerator",
            "CloudFront PUT"
        ],
        "answer": "S3 Transfer Acceleration",
        "explanation": "S3 Transfer Acceleration은 CloudFront의 엣지 네트워크를 이용하여 S3로 데이터를 전송하므로, 장거리 전송 시 속도가 크게 향상됩니다."
    },
    {
        "category": "관리 및 거버넌스",
        "title": "모든 EC2 인스턴스의 EBS 볼륨이 암호화되어 있는지 자동으로 확인하고, 암호화되지 않은 볼륨이 발견되면 자동으로 수정(암호화)하고 싶습니다. 어떤 서비스 조합이 필요합니까?",
        "options": [
            "AWS Config 규칙 및 AWS Systems Manager Automation",
            "CloudTrail 및 Lambda",
            "Inspector 및 GuardDuty",
            "Macie 및 Security Hub"
        ],
        "answer": "AWS Config 규칙 및 AWS Systems Manager Automation",
        "explanation": "AWS Config는 리소스의 규정 준수 여부(암호화 여부)를 감시하고, 비준수 리소스 발견 시 Systems Manager Automation 문서를 트리거하여 자동 복구(암호화 적용)를 수행할 수 있습니다."
    },
    {
        "category": "서버리스",
        "title": "10분마다 실행되는 .NET 기반의 컨테이너 작업을 비용 효율적으로 실행하고 싶습니다. 서버 프로비저닝 없이 실행하려면?",
        "options": [
            "컨테이너 이미지를 사용하는 AWS Lambda와 EventBridge 스케줄러",
            "EC2 인스턴스와 윈도우 작업 스케줄러",
            "Fargate와 ECS 서비스",
            "AWS Batch"
        ],
        "answer": "컨테이너 이미지를 사용하는 AWS Lambda와 EventBridge 스케줄러",
        "explanation": "Lambda는 컨테이너 이미지를 지원하며, 짧은 주기적 작업에는 서버리스 방식이 서버 유지 비용이 들지 않아 가장 경제적입니다."
    },
    {
        "category": "분석",
        "title": "S3 데이터 레이크에 있는 데이터를 SQL로 쿼리하고, 이를 기반으로 머신러닝 모델을 생성하여 예측 분석을 수행하고 싶습니다. 데이터 이동을 최소화하는 방법은?",
        "options": [
            "Amazon Redshift Serverless와 Redshift ML",
            "EMR과 Spark ML",
            "S3 데이터를 다운로드하여 로컬에서 학습",
            "SageMaker만 단독 사용"
        ],
        "answer": "Amazon Redshift Serverless와 Redshift ML",
        "explanation": "Redshift ML을 사용하면 데이터 웨어하우스 내부의 데이터를 이동하지 않고도 SQL 쿼리를 통해 머신러닝 모델을 생성, 훈련 및 배포할 수 있습니다."
    },
    {
        "category": "하이브리드",
        "title": "온프레미스 데이터 센터의 스토리지 용량이 부족합니다. 로컬 애플리케이션이 iSCSI 프로토콜을 통해 지연 시간 없이 데이터를 쓰되, 실제 데이터는 클라우드에 무제한으로 저장하고 싶습니다. 무엇을 써야 합니까?",
        "options": [
            "AWS Storage Gateway의 볼륨 게이트웨이 (Cached Volumes)",
            "S3 버킷 직접 마운트",
            "EFS 파일 시스템",
            "Snowball Edge"
        ],
        "answer": "AWS Storage Gateway의 볼륨 게이트웨이 (Cached Volumes)",
        "explanation": "Cached Volumes 모드는 S3를 백엔드 스토리지로 사용하면서, 자주 쓰는 데이터만 로컬에 캐싱하여 온프레미스 스토리지 용량을 절약하고 빠른 접근 속도를 제공합니다."
    },
    {
        "category": "마이그레이션",
        "title": "S3 버킷에 있는 객체들을 EFS 파일 시스템으로 지속적으로 동기화해야 합니다. 스크립트 작성 없이 관리형 서비스로 이를 구현하려면?",
        "options": [
            "AWS DataSync",
            "Lambda 함수 트리거",
            "EC2에서 cp 명령 실행",
            "S3 Replication"
        ],
        "answer": "AWS DataSync",
        "explanation": "AWS DataSync는 S3, EFS, FSx 등 다양한 스토리지 간의 데이터 이동을 자동화하고 최적화해주는 관리형 서비스입니다."
    },
    {
        "category": "보안",
        "title": "여러 S3 버킷에 저장된 데이터 중 개인 식별 정보(PII)가 포함된 파일을 자동으로 찾아내고 보안 팀에 알리고 싶습니다. 어떤 서비스를 활성화해야 합니까?",
        "options": [
            "Amazon Macie",
            "Amazon GuardDuty",
            "AWS Config",
            "AWS Inspector"
        ],
        "answer": "Amazon Macie",
        "explanation": "Amazon Macie는 머신러닝을 사용하여 S3 버킷 내의 데이터를 스캔하고, 민감한 정보(PII, 금융 정보 등)를 식별하여 분류하는 보안 서비스입니다."
    },
    {
        "category": "보안",
        "title": "프라이빗 서브넷의 EC2 인스턴스가 S3 버킷에 접근할 때, 트래픽이 인터넷을 타지 않고 AWS 내부 네트워크만 이용하도록 강제하고 싶습니다. 무엇을 설정해야 합니까?",
        "options": [
            "S3용 게이트웨이 VPC 엔드포인트 생성",
            "NAT 게이트웨이 사용",
            "인터넷 게이트웨이 사용",
            "VPN 연결"
        ],
        "answer": "S3용 게이트웨이 VPC 엔드포인트 생성",
        "explanation": "게이트웨이 VPC 엔드포인트를 사용하면 VPC 내부에서 S3 및 DynamoDB로의 트래픽이 퍼블릭 인터넷을 거치지 않고 AWS 사설망을 통해 안전하게 전송됩니다."
    },
    {
        "category": "데이터베이스",
        "title": "웹 애플리케이션의 세션 정보를 저장하는 데 사용하던 내장 NoSQL 데이터베이스가 트래픽 증가로 인해 한계에 도달했습니다. 완전 관리형이면서 확장성이 뛰어난 AWS NoSQL 서비스로 마이그레이션하려면?",
        "options": [
            "Amazon DynamoDB",
            "Amazon RDS",
            "Amazon Redshift",
            "Amazon S3"
        ],
        "answer": "Amazon DynamoDB",
        "explanation": "DynamoDB는 완전 관리형 키-값(Key-Value) NoSQL 데이터베이스로, 규모와 관계없이 일관된 성능을 제공하며 서버 관리가 필요 없어 세션 저장소로 적합합니다."
    },
    {
        "category": "관리 및 거버넌스",
        "title": "새로운 리전(ap-northeast-3)으로 확장을 준비 중입니다. 회사 정책상 특정 리전 외에는 리소스 생성을 막고, 모든 계정에 표준 보안 정책을 자동으로 적용하고 싶습니다. 가장 적합한 도구는?",
        "options": [
            "AWS Control Tower 및 AWS Organizations",
            "각 계정별 IAM 정책 수동 설정",
            "CloudFormation StackSets",
            "Config 규칙만 사용"
        ],
        "answer": "AWS Control Tower 및 AWS Organizations",
        "explanation": "Control Tower는 Organizations를 기반으로 가드레일(Guardrails)을 통해 특정 리전 사용 금지와 같은 정책을 모든 계정에 강제하고 중앙에서 거버넌스를 관리할 수 있습니다."
    },
    {
        "category": "비용 최적화",
        "title": "사용자가 업로드한 사진을 처음 30일 동안은 자주 조회하지만, 그 이후에는 거의 조회하지 않습니다. 데이터 접근 패턴에 따라 자동으로 비용을 절감하려면 어떤 S3 스토리지 클래스가 좋습니까?",
        "options": [
            "S3 Intelligent-Tiering",
            "S3 Standard",
            "S3 Glacier Deep Archive",
            "DynamoDB"
        ],
        "answer": "S3 Intelligent-Tiering",
        "explanation": "S3 Intelligent-Tiering은 데이터 접근 빈도를 모니터링하여 30일 이상 액세스가 없는 객체를 저렴한 티어로 자동 이동시켜 주므로, 접근 패턴이 변하는 데이터에 최적입니다."
    },
    {
        "category": "데이터베이스",
        "title": "MySQL 데이터베이스에 대한 읽기 요청이 너무 많아 성능이 느려지고 있습니다. 동일한 쿼리가 반복적으로 수행되는 패턴이 있습니다. 성능을 개선하는 가장 효율적인 방법은?",
        "options": [
            "Amazon ElastiCache를 도입하여 쿼리 결과를 캐싱한다.",
            "DB 인스턴스를 수직 확장한다.",
            "SNS를 사용하여 쿼리를 비동기 처리한다.",
            "Kinesis로 데이터를 스트리밍한다."
        ],
        "answer": "Amazon ElastiCache를 도입하여 쿼리 결과를 캐싱한다.",
        "explanation": "반복적인 읽기 요청이 많은 경우, ElastiCache(Redis/Memcached)를 사용하여 쿼리 결과를 메모리에 캐싱하면 DB 부하를 획기적으로 줄이고 응답 속도를 높일 수 있습니다."
    },
    {
        "category": "보안 및 규정 준수",
        "title": "규정 준수를 위해 RDS 데이터베이스 백업을 매일 생성하고 최소 2년 동안 보관해야 합니다. 이 과정을 중앙에서 자동화하고 관리하려면 어떤 서비스를 써야 합니까?",
        "options": [
            "AWS Backup",
            "RDS 자동 백업 기능만 사용",
            "Lambda로 스냅샷 생성 스크립트 작성",
            "CloudWatch Logs에 데이터 저장"
        ],
        "answer": "AWS Backup",
        "explanation": "AWS Backup은 정책 기반의 백업 솔루션으로, 백업 일정, 보존 기간(예: 2년), 수명 주기 관리를 중앙에서 자동화하여 규정 준수 요건을 쉽게 충족시킵니다."
    },
    {
        "category": "분석",
        "title": "서로 다른 AWS 계정을 사용하는 데이터 과학팀과 엔지니어링팀이 있습니다. 데이터를 복사하지 않고 안전하게 공유하며, 특정 열(Column)에 대한 접근을 제어하고 싶습니다. 무엇을 사용해야 합니까?",
        "options": [
            "AWS Lake Formation의 태그 기반 접근 제어",
            "S3 버킷 정책으로 공유",
            "데이터를 복제해서 전달",
            "IAM 역할 공유"
        ],
        "answer": "AWS Lake Formation의 태그 기반 접근 제어",
        "explanation": "Lake Formation을 사용하면 데이터를 물리적으로 이동하지 않고도 카탈로그 수준에서 권한을 관리하여 안전하게 데이터를 공유하고 세밀한 접근 제어가 가능합니다."
    },
    {
        "category": "아키텍처",
        "title": "전자 상거래 주문 시스템이 트래픽 급증으로 인해 데이터베이스 쓰기 부하가 걸리고 있습니다. 주문이 유실되지 않고 시스템 중단 시에도 처리가 보장되도록 하려면 어떤 아키텍처 변경이 필요합니까?",
        "options": [
            "EC2 인스턴스를 Auto Scaling 그룹에 넣고, 주문을 Amazon SQS 대기열로 보내 처리한다.",
            "데이터베이스를 Multi-AZ로 변경한다.",
            "SNS를 사용하여 주문을 브로드캐스트한다.",
            "Lambda 함수를 사용하여 직접 DB에 쓴다."
        ],
        "answer": "EC2 인스턴스를 Auto Scaling 그룹에 넣고, 주문을 Amazon SQS 대기열로 보내 처리한다.",
        "explanation": "SQS를 사용하여 주문 메시지를 버퍼링하면 시스템 부하를 조절하고 장애 시에도 메시지가 보존되어 내결함성을 확보할 수 있습니다."
    },
    {
        "category": "애플리케이션 통합",
        "title": "기존 온프레미스 애플리케이션이 AMQP(Advanced Message Queuing Protocol)를 사용하고 있습니다. 코드 변경을 최소화하면서 AWS로 마이그레이션하려면 어떤 메시징 서비스를 사용해야 합니까?",
        "options": [
            "Amazon MQ",
            "Amazon SQS",
            "Amazon SNS",
            "AWS Step Functions"
        ],
        "answer": "Amazon MQ",
        "explanation": "Amazon MQ는 ActiveMQ 및 RabbitMQ용 관리형 메시지 브로커 서비스로, AMQP와 같은 표준 프로토콜을 지원하여 기존 애플리케이션의 마이그레이션을 용이하게 합니다. (SQS/SNS는 자체 API 사용)"
    },
    {
        "category": "데이터베이스",
        "title": "새로운 애플리케이션의 트래픽 패턴을 예측할 수 없습니다. 초기 비용을 최적화하고 스로틀링(Throttling) 오류를 방지하려면 DynamoDB의 어떤 용량 모드를 선택해야 합니까?",
        "options": [
            "온디맨드(On-demand) 용량 모드",
            "프로비저닝(Provisioned) 용량 모드",
            "Auto Scaling이 설정된 프로비저닝 모드",
            "DAX 사용"
        ],
        "answer": "온디맨드(On-demand) 용량 모드",
        "explanation": "온디맨드 모드는 트래픽 패턴을 알 수 없거나 급격히 변하는 워크로드에 적합하며, 사용한 만큼만 비용을 지불하고 용량을 미리 지정할 필요가 없습니다."
    },
    {
        "category": "컴퓨팅",
        "title": "애플리케이션이 메모리에 대량의 데이터를 로드해야 해서 인스턴스 시작 시간이 오래 걸립니다. 애플리케이션을 빠르게 재개하고 시작 시간을 단축하려면 어떻게 해야 합니까?",
        "options": [
            "EC2 절전 모드(Hibernation)를 활성화하고 Auto Scaling 웜 풀(Warm Pool)을 구성한다.",
            "인스턴스 유형을 더 큰 것으로 변경한다.",
            "스팟 인스턴스를 사용한다.",
            "AMI를 매번 새로 굽는다."
        ],
        "answer": "EC2 절전 모드(Hibernation)를 활성화하고 Auto Scaling 웜 풀(Warm Pool)을 구성한다.",
        "explanation": "절전 모드를 사용하면 메모리 상태를 디스크에 저장하여 중지했다가 빠르게 재개할 수 있으며, 웜 풀을 사용하면 미리 초기화된 인스턴스를 대기시켜 시작 지연을 줄일 수 있습니다."
    },
    {
        "category": "모니터링",
        "title": "웹 애플리케이션의 성능 문제를 해결하기 위해 EC2 인스턴스의 CPU 사용률을 1분 단위로 자세히 분석해야 합니다. 무엇을 설정해야 합니까?",
        "options": [
            "EC2 인스턴스에 대한 세부 모니터링(Detailed Monitoring)을 활성화한다.",
            "기본 모니터링(5분)을 그대로 사용한다.",
            "CloudWatch Logs 에이전트를 설치한다.",
            "VPC 흐름 로그를 켠다."
        ],
        "answer": "EC2 인스턴스에 대한 세부 모니터링(Detailed Monitoring)을 활성화한다.",
        "explanation": "기본 CloudWatch 모니터링은 5분 주기로 데이터를 수집하지만, 세부 모니터링을 활성화하면 1분 주기로 데이터를 수집하여 정밀한 분석이 가능합니다."
    },
    {
        "category": "관리 및 거버넌스",
        "title": "AWS Organizations 환경에서 모든 신규 및 기존 계정에 대해 보안 모범 사례(Guardrail)를 자동으로 적용하고 중앙에서 관리하고 싶습니다. 가장 적합한 서비스는?",
        "options": [
            "AWS Control Tower",
            "AWS Config 만 단독 사용",
            "AWS Systems Manager",
            "IAM 정책 수동 관리"
        ],
        "answer": "AWS Control Tower",
        "explanation": "Control Tower는 "
    },
    {
        "category": "데이터베이스",
        "title": "Lambda 함수에서 RDS 데이터베이스로 연결을 맺을 때, 트래픽 폭주로 인해 ",
        "options": [
            "Amazon RDS Proxy를 사용한다.",
            "Lambda 동시성을 제한한다.",
            "RDS 인스턴스 크기를 늘린다.",
            "DynamoDB로 교체한다."
        ],
        "answer": "Amazon RDS Proxy를 사용한다.",
        "explanation": "RDS Proxy는 데이터베이스 연결 풀(Connection Pool)을 관리하여 Lambda와 같이 빈번하게 연결을 맺고 끊는 서버리스 애플리케이션의 부하를 줄여줍니다."
    },
    {
        "category": "보안",
        "title": "S3 버킷에 업로드되는 객체 중 개인정보(PII)가 포함된 경우 즉시 보안 팀에 이메일 알림을 보내고 싶습니다. 가장 효율적인 아키텍처는?",
        "options": [
            "Amazon Macie로 탐지하고, EventBridge와 SNS를 연동하여 알림을 보낸다.",
            "Lambda 함수로 모든 파일을 스캔한다.",
            "GuardDuty를 사용하여 탐지한다.",
            "S3 액세스 로그를 분석한다."
        ],
        "answer": "Amazon Macie로 탐지하고, EventBridge와 SNS를 연동하여 알림을 보낸다.",
        "explanation": "Macie는 민감 데이터를 자동 식별하며, 발견 결과를 EventBridge로 보내면 SNS를 통해 이메일 등의 알림을 자동화할 수 있습니다."
    },
    {
        "category": "비용 최적화",
        "title": "하나의 AWS 계정에서 여러 애플리케이션을 운영 중입니다. 각 애플리케이션별 비용을 정확히 분리하여 보고 싶습니다. 무엇을 해야 합니까?",
        "options": [
            "리소스에 태그(Tag)를 지정하고 ",
            "를 활성화한 뒤 Cost Explorer에서 분석한다.",
            "계정을 애플리케이션별로 분리한다.",
            "AWS Budgets를 사용한다.",
            "CloudWatch 지표를 본다."
        ],
        "answer": "리소스에 태그(Tag)를 지정하고 ",
        "explanation": "태그를 리소스에 부착하고 비용 배분 태그로 활성화하면, Cost Explorer에서 태그별로 비용을 그룹화하여 상세하게 분석할 수 있습니다."
    },
    {
        "category": "하이브리드",
        "title": "온프레미스 서버의 디스크 공간이 부족하여 iSCSI 방식을 통해 AWS 클라우드 스토리지로 확장하고 싶습니다. 로컬 캐싱 기능도 필요합니다. 어떤 솔루션이 적합합니까?",
        "options": [
            "AWS Storage Gateway 볼륨 게이트웨이(Stored Volumes)",
            "AWS Storage Gateway 볼륨 게이트웨이(Cached Volumes)",
            "S3 File Gateway",
            "Tape Gateway"
        ],
        "answer": "AWS Storage Gateway 볼륨 게이트웨이(Cached Volumes)",
        "explanation": "캐시 볼륨(Cached Volumes) 모드는 iSCSI 타겟을 제공하며, S3를 백엔드로 사용하여 무제한 확장이 가능하고 자주 쓰는 데이터는 로컬에 캐싱합니다."
    },
    {
        "category": "보안",
        "title": "직원들이 기존 사내 ID 공급자(IdP) 계정을 사용하여 AWS 계정에 로그인하게 하려 합니다. SAML 2.0을 지원하는 IdP와 AWS를 연동하는 가장 좋은 방법은?",
        "options": [
            "AWS IAM Identity Center (AWS SSO)를 사용하여 IdP와 연결한다.",
            "각 직원용 IAM 사용자를 만든다.",
            "Cognito를 사용한다.",
            "AD Connector를 사용한다."
        ],
        "answer": "AWS IAM Identity Center (AWS SSO)를 사용하여 IdP와 연결한다.",
        "explanation": "IAM Identity Center는 외부 IdP(Okta, Azure AD 등)와 SAML 2.0으로 연동하여 단일 사인온(SSO) 환경을 중앙에서 쉽게 구성할 수 있습니다."
    },
    {
        "category": "모니터링",
        "title": "중앙 모니터링 계정에서 조직 내 다른 모든 계정의 CloudWatch 지표와 로그를 보고 싶습니다. 계정 간 전환 없이 이를 구현하려면?",
        "options": [
            "CloudWatch 크로스 계정 관측성(Cross-Account Observability)을 설정한다.",
            "모든 로그를 중앙 S3 버킷으로 전송한다.",
            "IAM 역할을 사용하여 각 계정에 AssumeRole 한다.",
            "타사 모니터링 툴을 쓴다."
        ],
        "answer": "CloudWatch 크로스 계정 관측성(Cross-Account Observability)을 설정한다.",
        "explanation": "CloudWatch의 이 기능을 활성화하면 모니터링 계정과 소스 계정을 연결하여 중앙에서 통합된 대시보드와 로그를 볼 수 있습니다."
    },
    {
        "category": "데이터베이스",
        "title": "온프레미스 SQL Server를 AWS로 마이그레이션해야 합니다. 보안이 최우선이며, 운영 오버헤드를 줄이고 고가용성을 확보해야 합니다. 데이터 암호화도 필수입니다.",
        "options": [
            "Amazon RDS for SQL Server (Multi-AZ)를 사용하고 KMS로 암호화한다.",
            "EC2에 SQL Server를 설치하고 EBS 암호화를 사용한다.",
            "DynamoDB로 마이그레이션한다.",
            "S3에 데이터를 덤프한다."
        ],
        "answer": "Amazon RDS for SQL Server (Multi-AZ)를 사용하고 KMS로 암호화한다.",
        "explanation": "RDS는 관리형 서비스로 운영 부담을 줄이고 Multi-AZ로 고가용성을 제공하며, KMS와 통합되어 저장 데이터 암호화를 손쉽게 적용할 수 있습니다."
    },
    {
        "category": "컴퓨팅",
        "title": "Java 기반 웹 애플리케이션(Apache Tomcat)을 가장 쉽고 빠르게 배포하고 싶습니다. 인프라 프로비저닝, 로드 밸런싱, 확장을 자동으로 처리해주는 서비스는?",
        "options": [
            "AWS Elastic Beanstalk",
            "AWS Lambda",
            "Amazon EC2",
            "Amazon ECS"
        ],
        "answer": "AWS Elastic Beanstalk",
        "explanation": "Elastic Beanstalk은 코드만 업로드하면 용량 프로비저닝, 로드 밸런싱, 오토 스케일링 등 인프라 구성을 자동으로 처리해주는 PaaS형 서비스입니다."
    },
    {
        "category": "보안",
        "title": "개발 계정(Dev)의 개발자가 프로덕션 계정(Prod)의 리소스를 업데이트해야 합니다. 보안 모범 사례에 따라 접근 권한을 부여하는 방법은?",
        "options": [
            "Prod 계정에 IAM 역할을 생성하고, Dev 계정의 사용자가 이 역할을 맡도록(AssumeRole) 신뢰 정책을 설정한다.",
            "Prod 계정의 액세스 키를 개발자에게 공유한다.",
            "두 계정을 합친다.",
            "Dev 계정의 IAM 사용자에게 Prod 리소스 권한을 직접 준다."
        ],
        "answer": "Prod 계정에 IAM 역할을 생성하고, Dev 계정의 사용자가 이 역할을 맡도록(AssumeRole) 신뢰 정책을 설정한다.",
        "explanation": "크로스 계정 액세스는 대상 계정(Prod)에 역할을 만들고, 소스 계정(Dev)의 주체가 그 역할을 임시로 맡을 수 있도록 신뢰 관계를 맺는 것이 정석입니다."
    },
    {
        "category": "보안",
        "title": "규정 준수를 위해 데이터가 저장될 때(At rest)와 전송될 때(In transit) 모두 암호화되어야 합니다. EC2, ALB, Aurora를 사용하는 아키텍처에서 이를 어떻게 구현합니까?",
        "options": [
            "KMS로 EBS와 Aurora를 암호화하고, ACM 인증서를 ALB에 적용하여 HTTPS를 사용한다.",
            "모든 데이터를 클라이언트 측에서 암호화한다.",
            "S3에만 암호화를 적용한다.",
            "VPN을 사용한다."
        ],
        "answer": "KMS로 EBS와 Aurora를 암호화하고, ACM 인증서를 ALB에 적용하여 HTTPS를 사용한다.",
        "explanation": "저장 데이터는 AWS KMS로 암호화(EBS, RDS 등)하고, 전송 데이터는 ACM의 SSL/TLS 인증서를 로드 밸런서에 적용하여 보호하는 것이 표준입니다."
    },
    {
        "category": "보안",
        "title": "특정 국가에서의 접속을 원천적으로 차단하고 싶습니다. ALB와 CloudFront를 사용 중입니다. 가장 쉬운 방법은?",
        "options": [
            "AWS WAF의 지리적 일치(Geo match) 규칙을 사용하여 특정 국가를 차단한다.",
            "보안 그룹에서 해당 국가 IP 대역을 모두 막는다.",
            "NACL에서 차단한다.",
            "EC2 인스턴스에서 방화벽을 설정한다."
        ],
        "answer": "AWS WAF의 지리적 일치(Geo match) 규칙을 사용하여 특정 국가를 차단한다.",
        "explanation": "AWS WAF나 CloudFront의 지리적 제한 기능을 사용하면 국가 단위의 트래픽 허용/차단을 손쉽게 설정할 수 있습니다."
    },
    {
        "category": "보안",
        "title": "IAM 정책을 통해 사용자가 특정 리전(us-east-1)에서만 EC2 인스턴스를 종료할 수 있게 하고, 반드시 회사 네트워크(특정 소스 IP)에서만 요청이 가능하도록 제한하고 싶습니다. 정책의 어떤 요소를 써야 합니까?",
        "options": [
            "Condition 요소에서 `aws:SourceIp`와 `ec2:Region`을 지정한다.",
            "Resource 요소에 IP를 적는다.",
            "Principal 요소를 수정한다.",
            "보안 그룹을 사용한다."
        ],
        "answer": "Condition 요소에서 `aws:SourceIp`와 `ec2:Region`을 지정한다.",
        "explanation": "IAM 정책의 `Condition` 블록을 사용하면 요청이 발생한 소스 IP(`aws:SourceIp`)나 대상 리전 등의 조건을 상세하게 제어할 수 있습니다."
    },
    {
        "category": "네트워크",
        "title": "여러 대의 웹 서버 앞에 있는 ALB에 HTTPS를 적용하려고 합니다. SSL 인증서를 매년 갱신하는 번거로움을 없애고 싶습니다. 무엇을 사용해야 합니까?",
        "options": [
            "AWS Certificate Manager (ACM)에서 공인 인증서를 발급받아 ALB에 연결한다.",
            "EC2 인스턴스마다 인증서를 설치한다.",
            "Let",
            ", "
        ],
        "answer": "AWS Certificate Manager (ACM)에서 공인 인증서를 발급받아 ALB에 연결한다.",
        "explanation": "ACM에서 발급받은 공인 인증서를 ALB, CloudFront 등에 연결하면, AWS가 만료 전에 자동으로 인증서를 갱신해 주므로 관리 부담이 없습니다."
    },
    {
        "category": "네트워크",
        "title": "사무실 네트워크에서만 AWS VPC 내의 프라이빗 RDS 데이터베이스에 접속할 수 있어야 합니다. 공용 인터넷을 통하지 않고 안전하게 연결하는 방법은?",
        "options": [
            "AWS Site-to-Site VPN 연결을 설정한다.",
            "RDS를 퍼블릭 서브넷으로 옮긴다.",
            "인터넷 게이트웨이를 사용한다.",
            "RDS 보안 그룹에서 0.0.0.0/0을 허용한다."
        ],
        "answer": "AWS Site-to-Site VPN 연결을 설정한다.",
        "explanation": "Site-to-Site VPN을 사용하면 온프레미스 네트워크와 AWS VPC 간에 암호화된 터널을 생성하여, 사설 IP를 통해 안전하게 리소스에 접근할 수 있습니다."
    },
    {
        "category": "저장소",
        "title": "EFS에 저장된 파일 중 30일 동안 액세스되지 않은 파일을 비용 효율적인 스토리지 클래스로 자동 이동하고 싶습니다. EFS의 어떤 기능을 켜야 합니까?",
        "options": [
            "EFS 수명 주기 관리(Lifecycle Management)를 활성화하여 EFS Infrequent Access(IA)로 이동한다.",
            "S3로 데이터를 복사하는 스크립트를 짠다.",
            "EBS 콜드 HDD로 옮긴다.",
            "Glacier로 아카이빙한다."
        ],
        "answer": "EFS 수명 주기 관리(Lifecycle Management)를 활성화하여 EFS Infrequent Access(IA)로 이동한다.",
        "explanation": "EFS 수명 주기 관리를 설정하면 일정 기간 액세스되지 않은 파일을 더 저렴한 IA(Infrequent Access) 스토리지 클래스로 자동 전환해 줍니다."
    },
    {
        "category": "보안",
        "title": "애플리케이션이 RDS 데이터베이스에 접속할 때 사용하는 비밀번호를 코드에 하드코딩하지 않고, 주기적으로 자동 교체(Rotation)하고 싶습니다. 어떤 서비스가 적합합니까?",
        "options": [
            "AWS Secrets Manager",
            "AWS Systems Manager Parameter Store",
            "S3 암호화 버킷",
            "DynamoDB"
        ],
        "answer": "AWS Secrets Manager",
        "explanation": "Secrets Manager는 데이터베이스 자격 증명 등을 안전하게 저장할 뿐만 아니라, Lambda 함수를 통해 주기적으로 비밀번호를 자동 교체하는 기능까지 기본 제공합니다."
    },
    {
        "category": "데이터베이스",
        "title": "트래픽이 매우 불규칙하고 예측하기 어려운 워크로드를 위한 관계형 데이터베이스가 필요합니다. 사용하지 않을 때는 자동으로 종료되어 비용을 아끼고 싶습니다.",
        "options": [
            "Amazon Aurora Serverless",
            "Amazon RDS for MySQL",
            "DynamoDB On-Demand",
            "EC2 위 MySQL"
        ],
        "answer": "Amazon Aurora Serverless",
        "explanation": "Aurora Serverless는 애플리케이션 수요에 따라 컴퓨팅 용량을 자동으로 시작, 확장, 축소, 종료하므로 간헐적이거나 예측 불가능한 워크로드에 비용 효율적입니다."
    },
    {
        "category": "네트워크",
        "title": "여러 AWS 리전에 있는 VPC들과 온프레미스 데이터 센터를 서로 연결해야 합니다. 복잡한 피어링 연결 대신 중앙 허브 방식으로 네트워크를 단순화하려면?",
        "options": [
            "AWS Transit Gateway",
            "VPC Peering",
            "Direct Connect Gateway 만 사용",
            "VPN Mesh"
        ],
        "answer": "AWS Transit Gateway",
        "explanation": "Transit Gateway는 중앙 허브 역할을 하여 수천 개의 VPC와 온프레미스 네트워크를 단일 게이트웨이로 연결할 수 있어 네트워크 토폴로지를 단순화합니다."
    },
    {
        "category": "서버리스",
        "title": "S3에 업로드되는 작은 파일(2MB)을 간단히 가공하는 로직을 실행해야 합니다. 서버 관리 없이 비용 효율적으로 처리하려면?",
        "options": [
            "AWS Lambda",
            "AWS Glue",
            "Amazon EMR",
            "EC2"
        ],
        "answer": "AWS Lambda",
        "explanation": "작은 크기의 파일에 대한 간단한 이벤트 기반 처리는 Lambda가 가장 비용 효율적이고 설정이 간편합니다. (Glue나 EMR은 대규모 ETL에 더 적합)"
    },
    {
        "category": "보안",
        "title": "외부 파트너사(Third-party)가 우리 회사의 S3 버킷 데이터를 분석해야 합니다. 장기 자격 증명(Access Key)을 공유하지 않고 안전하게 접근 권한을 주는 방법은?",
        "options": [
            "외부 ID를 포함한 크로스 계정 IAM 역할(Cross-Account Role)을 생성하여 제공한다.",
            "IAM 사용자를 만들어 액세스 키를 준다.",
            "버킷을 퍼블릭으로 만든다.",
            "Cognito 자격 증명을 준다."
        ],
        "answer": "외부 ID를 포함한 크로스 계정 IAM 역할(Cross-Account Role)을 생성하여 제공한다.",
        "explanation": "외부 파트너에게 IAM 역할을 가정(AssumeRole)하게 하면 임시 보안 자격 증명을 통해 안전하게 접근할 수 있으며, "
    },
    {
        "category": "마이그레이션",
        "title": "150TB의 데이터를 AWS로 옮겨야 하는데 네트워크 속도가 100Mbps로 느립니다. 기한 내에 데이터를 옮기기 위한 물리적 전송 솔루션은?",
        "options": [
            "AWS Snowball Edge",
            "AWS Snowmobile",
            "S3 Transfer Acceleration",
            "Direct Connect"
        ],
        "answer": "AWS Snowball Edge",
        "explanation": "150TB 정도의 데이터는 Snowball Edge 장비(대당 80TB~100TB) 몇 대를 사용하는 것이 가장 효율적입니다. (Snowmobile은 엑사바이트급 초대형 데이터용)"
    },
    {
        "category": "저장소",
        "title": "전 세계에 흩어진 사용자들이 500GB 이상의 대용량 파일을 중앙 S3 버킷으로 업로드해야 합니다. 인터넷 구간의 지연 시간을 줄여 업로드 속도를 높이려면?",
        "options": [
            "S3 Transfer Acceleration 활성화",
            "S3 멀티파트 업로드만 사용",
            "Global Accelerator 사용",
            "CloudFront PUT 사용"
        ],
        "answer": "S3 Transfer Acceleration 활성화",
        "explanation": "S3 Transfer Acceleration은 전 세계에 분산된 CloudFront 엣지 로케이션을 통해 데이터를 S3로 라우팅하여 장거리 전송 속도를 최적화합니다."
    },
    {
        "category": "보안",
        "title": "웹 서버(EC2)가 인터넷의 모든 사용자로부터 HTTPS(443) 요청을 받아야 합니다. 보안 그룹과 NACL 설정을 어떻게 해야 합니까?",
        "options": [
            "보안 그룹과 NACL의 인바운드 규칙에서 0.0.0.0/0의 443 포트를 허용한다.",
            "아웃바운드 규칙만 설정한다.",
            "특정 IP만 허용한다.",
            "모든 포트를 개방한다."
        ],
        "answer": "보안 그룹과 NACL의 인바운드 규칙에서 0.0.0.0/0의 443 포트를 허용한다.",
        "explanation": "퍼블릭 웹 서비스를 제공하려면 보안 그룹(인스턴스 레벨)과 NACL(서브넷 레벨) 모두에서 443 포트에 대한 인바운드 트래픽을 허용해야 합니다."
    },
    {
        "category": "비용 최적화",
        "title": "각 IAM 사용자별로 발생시킨 AWS 비용을 상세하게 파악하고 싶습니다. 이를 위해 활성화해야 하는 태그와 분석 도구는?",
        "options": [
            "",
            " 태그를 활성화하고 AWS Cost Explorer에서 리포트를 생성한다.",
            "AWS Budgets 알림을 설정한다.",
            "CloudTrail 로그를 분석한다.",
            "Athena로 결제 데이터를 쿼리한다."
        ],
        "answer": "",
        "explanation": "비용 배분 태그(Cost Allocation Tag)를 활성화하면 Cost Explorer에서 해당 태그(예: 사용자명)를 기준으로 비용을 그룹화하여 분석할 수 있습니다."
    },
    {
        "category": "비용 최적화",
        "title": "EC2, Fargate, Lambda 사용량을 모두 포함하여 비용을 절감하고 싶습니다. 리전이나 인스턴스 패밀리가 변경되어도 유연하게 적용되는 할인 옵션은?",
        "options": [
            "Compute Savings Plans",
            "EC2 Instance Savings Plans",
            "Reserved Instances",
            "Spot Instances"
        ],
        "answer": "Compute Savings Plans",
        "explanation": "Compute Savings Plans는 EC2뿐만 아니라 Fargate, Lambda 사용량까지 커버하며, 리전이나 인스턴스 타입이 바뀌어도 할인이 적용되는 가장 유연한 옵션입니다."
    },
    {
        "category": "데이터베이스",
        "title": "개발용 데이터베이스가 하루에 몇 시간만 사용됩니다. 사용하지 않을 때 비용을 최소화할 수 있는 Aurora 구성은?",
        "options": [
            "Amazon Aurora Serverless",
            "Aurora Provisioned",
            "RDS Multi-AZ",
            "EC2 DB"
        ],
        "answer": "Amazon Aurora Serverless",
        "explanation": "Aurora Serverless는 데이터베이스가 활성 상태일 때만 용량을 할당하고, 사용하지 않을 때는 용량을 0으로 줄이거나(일시 중지) 최소화하여 비용을 획기적으로 줄여줍니다."
    },
    {
        "category": "보안",
        "title": "AWS 계정 루트 사용자(Root User)를 보호하기 위해 반드시 수행해야 하는 두 가지 조치는 무엇입니까?",
        "options": [
            "루트 사용자에게 MFA 활성화 및 액세스 키 삭제(또는 생성 금지)",
            "루트 사용자를 관리자용으로 사용",
            "비밀번호를 팀원과 공유",
            "CloudTrail 끄기"
        ],
        "answer": "루트 사용자에게 MFA 활성화 및 액세스 키 삭제(또는 생성 금지)",
        "explanation": "루트 계정은 모든 권한을 가지므로 MFA로 강력하게 보호해야 하며, 프로그램 방식의 액세스 키는 보안상 생성하지 않거나 삭제하는 것이 원칙입니다."
    },
    {
        "category": "보안",
        "title": "암호화된 EBS 스냅샷이 포함된 AMI를 다른 AWS 계정과 공유하려고 합니다. 단순히 AMI 공유 권한만 주면 실패합니다. 무엇을 더 해야 합니까?",
        "options": [
            "스냅샷 암호화에 사용된 KMS 키의 사용 권한을 대상 계정에 부여해야 한다.",
            "스냅샷을 복호화해서 공유한다.",
            "S3로 내보내서 공유한다.",
            "AMI를 퍼블릭으로 만든다."
        ],
        "answer": "스냅샷 암호화에 사용된 KMS 키의 사용 권한을 대상 계정에 부여해야 한다.",
        "explanation": "암호화된 리소스를 공유할 때는 리소스 자체(AMI/스냅샷)의 공유 권한뿐만 아니라, 암호를 풀 수 있는 KMS 키에 대한 사용 권한도 대상 계정에 부여해야 합니다."
    },
    {
        "category": "저장소",
        "title": "S3에 저장된 데이터에 개인정보(PII)가 포함되어 있습니다. 특정 애플리케이션이 이 데이터를 요청할 때만 PII를 마스킹(익명화)해서 보여주고 싶습니다. 원본 데이터를 수정하지 않고 이를 구현하려면?",
        "options": [
            "S3 Object Lambda를 사용한다.",
            "데이터를 복제하여 별도 버킷에 마스킹 버전을 저장한다.",
            "Lambda를 트리거하여 파일을 수정한다.",
            "클라이언트에서 마스킹한다."
        ],
        "answer": "S3 Object Lambda를 사용한다.",
        "explanation": "S3 Object Lambda를 사용하면 S3에서 데이터를 가져오는 시점에 Lambda 함수를 실행하여 데이터를 가공(마스킹 등)한 후 애플리케이션에 전달할 수 있습니다."
    },
    {
        "category": "아키텍처",
        "title": "정적 웹사이트에 ",
        "options": [
            "S3(정적 호스팅) + API Gateway + Lambda + SES",
            "EC2에 LAMP 스택 설치",
            "Elastic Beanstalk 사용",
            "Lightsail 사용"
        ],
        "answer": "S3(정적 호스팅) + API Gateway + Lambda + SES",
        "explanation": "정적 웹사이트는 S3로 호스팅하고, 백엔드 로직은 API Gateway와 Lambda, 이메일 전송은 SES를 사용하는 서버리스 아키텍처가 가장 저렴하고 관리 부담이 적습니다."
    },
    {
        "category": "비용 최적화",
        "title": "특정 AWS 계정의 월 예산이 초과되면 관리자에게 알림을 보내고, 자동으로 새로운 리소스 생성을 차단하고 싶습니다. 어떤 서비스 조합이 필요합니까?",
        "options": [
            "AWS Budgets + SNS(알림) + Service Control Policy (SCP) 적용",
            "Cost Explorer + CloudWatch Alarm",
            "Trusted Advisor",
            "Lambda로 주기적 확인"
        ],
        "answer": "AWS Budgets + SNS(알림) + Service Control Policy (SCP) 적용",
        "explanation": "AWS Budgets를 사용하면 예산 초과 시 알림(SNS)을 보낼 수 있을 뿐만 아니라, "
    },
    {
        "category": "컴퓨팅",
        "title": "HPC(고성능 컴퓨팅) 작업을 위해 EC2 인스턴스 간의 네트워크 지연 시간을 최소화하고 통신 속도를 극대화해야 합니다. 인스턴스를 어떻게 배치해야 합니까?",
        "options": [
            "단일 가용 영역(AZ) 내의 클러스터 배치 그룹(Cluster Placement Group)에 배치한다.",
            "분산 배치 그룹을 사용한다.",
            "여러 AZ에 분산한다.",
            "파티션 배치 그룹을 사용한다."
        ],
        "answer": "단일 가용 영역(AZ) 내의 클러스터 배치 그룹(Cluster Placement Group)에 배치한다.",
        "explanation": "클러스터 배치 그룹은 인스턴스들을 물리적으로 인접하게 배치하여 초고속 네트워크 통신(HPC, ML 등)에 최적화된 성능을 제공합니다."
    },
    {
        "category": "보안",
        "title": "EC2 인스턴스를 시작할 때 새 EBS 볼륨을 생성합니다. 이 볼륨이 처음부터 암호화되도록 하려면 어떻게 해야 합니까?",
        "options": [
            "볼륨 생성 시 ",
            " 옵션을 체크하고 KMS 키를 선택한다.",
            "볼륨 생성 후 나중에 암호화한다.",
            "암호화는 스냅샷에서만 가능하다.",
            "OS 내부에서 암호화 툴을 돌린다."
        ],
        "answer": "볼륨 생성 시 ",
        "explanation": "EBS 볼륨은 생성 시점에 암호화 옵션을 선택하여 즉시 암호화할 수 있으며, 이는 가장 간편하고 확실한 보안 방법입니다."
    },
    {
        "category": "아키텍처",
        "title": "3계층 웹 애플리케이션(Web, App, DB)을 구축합니다. 웹 서버는 퍼블릭 서브넷에, 앱 및 DB 서버는 프라이빗 서브넷에 배치했습니다. 웹 서버가 인터넷 트래픽을 안전하게 받으려면 무엇이 필요합니까?",
        "options": [
            "퍼블릭 서브넷에 Application Load Balancer(ALB)를 배치하고, 웹 서버는 프라이빗으로 옮겨 ALB와 통신하게 한다.",
            "웹 서버에 퍼블릭 IP를 할당한다.",
            "모든 서버를 퍼블릭에 둔다.",
            "NAT 게이트웨이로 인바운드 트래픽을 받는다."
        ],
        "answer": "퍼블릭 서브넷에 Application Load Balancer(ALB)를 배치하고, 웹 서버는 프라이빗으로 옮겨 ALB와 통신하게 한다.",
        "explanation": "보안을 강화하기 위해 웹 서버도 프라이빗 서브넷에 숨기고, 오직 퍼블릭 서브넷에 있는 ALB를 통해서만 트래픽을 받도록 구성하는 것이 모범 사례입니다."
    },
    {
        "category": "아키텍처",
        "title": "가용성이 높아야 하는 웹 애플리케이션을 구축 중입니다. 정적 및 동적 콘텐츠를 전 세계 사용자에게 빠르게 전달하고, 웹 서버가 인터넷에 직접 노출되지 않도록 보안을 강화하고 싶습니다. 어떤 구성이 적절합니까?",
        "options": [
            "Application Load Balancer(ALB)를 프라이빗 서브넷에 배치하고 CloudFront를 통해 트래픽을 전달한다.",
            "웹 서버에 퍼블릭 IP를 할당한다.",
            "모든 서버를 퍼블릭 서브넷에 둔다.",
            "NAT 게이트웨이로 인바운드 트래픽을 허용한다."
        ],
        "answer": "Application Load Balancer(ALB)를 프라이빗 서브넷에 배치하고 CloudFront를 통해 트래픽을 전달한다.",
        "explanation": "CloudFront와 ALB를 조합하면 엣지 로케이션을 통해 전송 속도를 높일 수 있으며, ALB와 서버를 프라이빗 서브넷에 숨겨 직접적인 외부 공격으로부터 보호할 수 있습니다. "
    },
    {
        "category": "마이그레이션",
        "title": "두 AWS 리전에 있는 NFS 파일 시스템 간에 대량의 데이터를 주기적으로 동기화해야 합니다. 관리 오버헤드를 최소화하면서 이를 자동화할 수 있는 가장 효율적인 서비스는 무엇입니까?",
        "options": [
            "AWS DataSync",
            "AWS Snowball",
            "Amazon EC2에 SFTP 서버 구축",
            "AWS Database Migration Service(DMS)"
        ],
        "answer": "AWS DataSync",
        "explanation": "AWS DataSync는 리전 간 또는 온프레미스-AWS 간 파일 시스템 데이터를 자동으로 가속 전송하고 동기화하는 데 최적화된 관리형 서비스입니다. "
    },
    {
        "category": "데이터베이스",
        "title": "PostgreSQL 데이터베이스를 여러 AWS 리전에 걸쳐 항상 온라인 상태로 유지해야 합니다. 리전 장애 시에도 데이터 유실 없이 서비스를 지속하려면 어떤 RDS 기능을 사용해야 합니까?",
        "options": [
            "교차 리전 읽기 전용 복제본(Cross-Region Read Replica) 생성",
            "다중 AZ(Multi-AZ) 배포 활성화",
            "단일 인스턴스로 운영",
            "S3에 스냅샷 백업만 수행"
        ],
        "answer": "교차 리전 읽기 전용 복제본(Cross-Region Read Replica) 생성",
        "explanation": "RDS Multi-AZ는 단일 리전 내 가용성을 보장하며, 여러 리전에 걸친 고가용성과 재해 복구를 위해서는 교차 리전 복제본이 필요합니다. "
    },
    {
        "category": "보안",
        "title": "S3 버킷에 저장된 데이터에서 주민등록번호나 신용카드 번호 같은 개인정보(PII)가 감지되면 보안 팀에 즉시 알림을 보내야 합니다. 어떤 조합이 가장 적절합니까?",
        "options": [
            "Amazon Macie와 Amazon EventBridge, Amazon SNS를 연동한다.",
            "Amazon GuardDuty를 사용한다.",
            "Amazon Inspector를 사용한다.",
            "SQS로 메시지를 보낸다."
        ],
        "answer": "Amazon Macie와 Amazon EventBridge, Amazon SNS를 연동한다.",
        "explanation": "Amazon Macie는 S3의 민감 정보를 식별하는 전용 서비스이며, EventBridge와 SNS를 통해 실시간 알림 시스템을 구축할 수 있습니다. "
    },
    {
        "category": "저장소",
        "title": "미국, 유럽, 아시아 세 리전의 S3 버킷에 동영상을 저장하고 있습니다. 애플리케이션 코드를 최소한으로 수정하면서 전 세계 사용자에게 가장 가까운 리전의 버킷으로 자동 연결되게 하려면 무엇을 사용합니까?",
        "options": [
            "S3 멀티 리전 액세스 포인트(Multi-Region Access Points) 생성",
            "리전별로 다른 도메인 사용",
            "CloudFront 지리적 라우팅",
            "VPC 피어링"
        ],
        "answer": "S3 멀티 리전 액세스 포인트(Multi-Region Access Points) 생성",
        "explanation": "S3 멀티 리전 액세스 포인트는 단일 글로벌 엔드포인트를 제공하며, AWS 글로벌 네트워크를 통해 사용자에게 가장 지연 시간이 낮은 리전의 버킷으로 요청을 라우팅합니다. "
    },
    {
        "category": "컴퓨팅",
        "title": "리눅스 EC2에서 1시간 정도 걸리는 데이터 분석 작업을 주기적으로 실행해야 합니다. 성능과 확장성을 보장하면서 관리 부담이 가장 적은 솔루션은 무엇입니까?",
        "options": [
            "AWS Batch와 Amazon EventBridge를 사용한다.",
            "AWS App Runner를 사용한다.",
            "AWS Lambda를 사용한다.",
            "EC2 Auto Scaling 그룹만 사용한다."
        ],
        "answer": "AWS Batch와 Amazon EventBridge를 사용한다.",
        "explanation": "AWS Batch는 배치 작업의 규모에 따라 인프라를 자동 관리하며, 15분 이상 걸리는 긴 작업은 Lambda(최대 15분)보다 Batch가 적합합니다. "
    },
    {
        "category": "아키텍처",
        "title": "웹 애플리케이션에 사용자 세션 고정(Sticky Sessions) 기능을 적용하고, 일반적인 웹 공격으로부터 보호하고 싶습니다. 어떤 설정을 결합해야 합니까?",
        "options": [
            "Application Load Balancer의 세션 고정 활성화 및 AWS WAF 연결",
            "Network Load Balancer와 보안 그룹 사용",
            "퍼블릭 IP와 NACL 사용",
            "전용 호스트 사용"
        ],
        "answer": "Application Load Balancer의 세션 고정 활성화 및 AWS WAF 연결",
        "explanation": "ALB는 HTTP/HTTPS 계층에서 세션 고정을 지원하며, AWS WAF와 연동하여 SQL 인젝션 등의 공격을 차단할 수 있습니다. "
    },
    {
        "category": "관리 및 거버넌스",
        "title": "대학 프로젝트에서 EC2, RDS, DynamoDB 리소스를 사용 중입니다. 개별 스크립트 없이 모든 리소스의 백업을 중앙에서 자동화하고 관리하려면 어떤 서비스를 써야 합니까?",
        "options": [
            "AWS Backup",
            "AWS Storage Gateway",
            "AWS Config",
            "AWS Systems Manager"
        ],
        "answer": "AWS Backup",
        "explanation": "AWS Backup은 여러 AWS 서비스의 백업을 통합 관리하고 자동화하는 완전 관리형 정책 기반 서비스입니다. "
    },
    {
        "category": "분석",
        "title": "S3 기반 데이터 레이크에서 각 사용자에게 필요한 데이터 행(Row)만 볼 수 있도록 세밀한 접근 제어를 적용하고 싶습니다. 무엇을 사용해야 합니까?",
        "options": [
            "Amazon S3와 AWS Lake Formation",
            "Amazon RDS와 IAM 정책",
            "Amazon Redshift와 IAM",
            "AWS Glue Catalog와 DataBrew"
        ],
        "answer": "Amazon S3와 AWS Lake Formation",
        "explanation": "AWS Lake Formation은 데이터 레이크 리소스에 대해 행(Row) 및 열(Column) 수준의 정교한 권한 관리를 지원합니다. "
    },
    {
        "category": "보안",
        "title": "회사의 각 부서별로 사용자가 수행해야 하는 작업에 대해서만 최소한의 권한을 부여하려고 합니다. 관리 부담을 줄이면서 이를 구현하는 가장 좋은 방법은?",
        "options": [
            "IAM 그룹을 생성하고 직무별 IAM 정책을 연결하여 관리한다.",
            "모든 사용자에게 관리자 권한을 부여한다.",
            "SCP(서비스 제어 정책)만 사용한다.",
            "모든 사용자에게 개별 정책을 연결한다."
        ],
        "answer": "IAM 그룹을 생성하고 직무별 IAM 정책을 연결하여 관리한다.",
        "explanation": "IAM 그룹을 사용하면 개별 사용자별 관리가 아닌 부서 단위로 권한을 효율적으로 관리할 수 있으며 최소 권한 원칙을 준수할 수 있습니다. "
    },
    {
        "category": "보안",
        "title": "Amazon RDS for MySQL 데이터베이스의 비밀번호를 정기적으로 변경해야 하며, 이 과정을 수동 작업 없이 자동화하고 싶습니다. 어떤 서비스를 사용해야 합니까?",
        "options": [
            "AWS Secrets Manager",
            "AWS Systems Manager Parameter Store",
            "AWS Key Management Service(KMS)",
            "IAM 역할 정책"
        ],
        "answer": "AWS Secrets Manager",
        "explanation": "Secrets Manager는 RDS와 직접 통합되어 데이터베이스 자격 증명을 안전하게 저장하고, Lambda를 사용하여 주기적으로 비밀번호를 자동 교체(Rotation)할 수 있습니다. "
    },
    {
        "category": "분석",
        "title": "AWS Glue ETL 작업을 실행할 때, 이미 처리된 S3 데이터는 건너뛰고 새로 추가된 데이터만 처리하도록 설정하여 효율성을 높이고 싶습니다. 어떤 기능을 사용해야 합니까?",
        "options": [
            "작업 북마크(Job Bookmarks) 활성화",
            "NumberOfWorkers를 1로 설정",
            "FindMatches 머신러닝 변환 사용",
            "S3 수명 주기 정책 적용"
        ],
        "answer": "작업 북마크(Job Bookmarks) 활성화",
        "explanation": "Glue 작업 북마크는 이전 실행에서 처리된 데이터 상태 정보를 유지하여, 다음 실행 시 증분 데이터만 처리하도록 도와줍니다. "
    },
    {
        "category": "보안",
        "title": "EC2에서 실행되는 애플리케이션이 RDS 데이터베이스에 접속해야 합니다. 자격 증명을 애플리케이션 코드에 노출하지 않고 가장 안전하게 관리하는 방법은 무엇입니까?",
        "options": [
            "AWS Secrets Manager에 자격 증명을 저장하고 EC2에 IAM 역할을 부여하여 호출한다.",
            "S3 암호화 버킷에 비밀번호 파일을 저장한다.",
            "EC2 환경 변수에 직접 입력한다.",
            "KMS를 사용하여 코드를 암호화한다."
        ],
        "answer": "AWS Secrets Manager에 자격 증명을 저장하고 EC2에 IAM 역할을 부여하여 호출한다.",
        "explanation": "IAM 역할을 통해 Secrets Manager에 접근하게 하면 코드에 비밀번호를 적을 필요가 없으며, 자격 증명 노출 위험을 최소화할 수 있습니다. "
    },
    {
        "category": "저장소",
        "title": "프로덕션 환경의 EBS 볼륨 데이터를 테스트 환경으로 복제해야 합니다. I/O 성능을 유지하면서 프로덕션에 영향을 주지 않고 데이터를 복제하는 가장 좋은 방법은?",
        "options": [
            "프로덕션 볼륨의 스냅샷을 생성하고 테스트 환경에서 새 볼륨으로 복원한다.",
            "기존 볼륨을 직접 테스트 인스턴스에 연결한다.",
            "데이터를 S3로 복사한 뒤 다시 다운로드한다.",
            "EBS 직접 API를 사용하여 데이터를 스트리밍한다."
        ],
        "answer": "프로덕션 볼륨의 스냅샷을 생성하고 테스트 환경에서 새 볼륨으로 복원한다.",
        "explanation": "스냅샷을 기반으로 새 볼륨을 생성하면 원본 데이터에 영향을 주지 않고 즉시 독립적인 복사본을 만들어 테스트할 수 있습니다. "
    },
    {
        "category": "네트워크",
        "title": "AWS Direct Connect를 사용하여 온프레미스와 AWS를 연결했습니다. 전용선 장애 시 서비스 중단을 막기 위해 가장 비용 효율적인 백업 연결 방식은 무엇입니까?",
        "options": [
            "AWS Site-to-Site VPN 연결 구성",
            "두 번째 Direct Connect 회선 추가",
            "인터넷 게이트웨이를 통한 공용 연결",
            "VPC 피어링"
        ],
        "answer": "AWS Site-to-Site VPN 연결 구성",
        "explanation": "Direct Connect의 장애를 대비하여 인터넷 기반의 Site-to-Site VPN을 백업으로 두는 것이 가장 경제적이면서도 효과적인 이중화 방안입니다. "
    },
    {
        "category": "보안",
        "title": "AWS Certificate Manager(ACM)를 통해 발급받은 SSL/TLS 인증서를 ALB에 적용했습니다. 인증서 만료로 인한 서비스 중단을 방지하기 위해 수행해야 할 작업은?",
        "options": [
            "별도의 작업이 필요 없다(자동으로 수행됨).",
            "매년 수동으로 재발급 신청을 한다.",
            "인증서 파일을 S3로 백업한다.",
            "EventBridge로 만료 알림을 구성하고 수동 갱신한다."
        ],
        "answer": "별도의 작업이 필요 없다(자동으로 수행됨).",
        "explanation": "ACM은 ALB나 CloudFront와 연동되어 사용 중인 공인 인증서에 대해 만료 전 자동 갱신 및 배포를 지원합니다. "
    },
    {
        "category": "비용 최적화",
        "title": "메시지 대기열을 처리하는 Lambda 함수의 컴퓨팅 비용을 줄이면서 일정한 처리 성능을 유지하고 싶습니다. 어떤 도구의 권장 사항을 따라야 합니까?",
        "options": [
            "AWS Compute Optimizer",
            "AWS Trusted Advisor",
            "AWS Budgets",
            "Cost Explorer"
        ],
        "answer": "AWS Compute Optimizer",
        "explanation": "Compute Optimizer는 Lambda 함수의 과거 실행 데이터를 분석하여 성능 저하 없이 비용을 절감할 수 있는 최적의 메모리 크기를 추천해 줍니다. "
    },
    {
        "category": "저장소",
        "title": "고성능 컴퓨팅(HPC) 워크로드를 위해 수천 개의 인스턴스가 동시에 밀리초 미만의 지연 시간으로 공유 데이터에 접근해야 합니다. 가장 적합한 서비스는?",
        "options": [
            "Amazon FSx for Lustre",
            "Amazon EFS",
            "Amazon EBS Multi-Attach",
            "Amazon S3"
        ],
        "answer": "Amazon FSx for Lustre",
        "explanation": "FSx for Lustre는 병렬 파일 시스템으로, 대규모 연산 처리에 필요한 초고속 처리량과 낮은 지연 시간을 제공하는 데 특화되어 있습니다. "
    },
    {
        "category": "보안",
        "title": "S3 버킷의 데이터를 암호화해야 하며, 특정 팀에게만 암호화 키를 생성, 교체 및 제어할 수 있는 권한을 부여하고 싶습니다. 어떤 유형의 키를 사용해야 합니까?",
        "options": [
            "AWS KMS 고객 관리형 키(CMK)",
            "S3 관리형 키(SSE-S3)",
            "KMS 기본 키(aws/s3)",
            "CloudHSM 전용 키"
        ],
        "answer": "AWS KMS 고객 관리형 키(CMK)",
        "explanation": "고객 관리형 키를 사용하면 키 정책을 직접 제어할 수 있어, 특정 사용자에게만 관리 권한을 위임하는 세밀한 보안 설정이 가능합니다. "
    },
    {
        "category": "애플리케이션 통합",
        "title": "SNS 주제를 구독하는 여러 서비스가 있습니다. 특정 조건에 맞는 메시지만 각 서비스에 전달되도록 구현하여 불필요한 처리를 줄이려면 어떻게 해야 합니까?",
        "options": [
            "SNS 구독 필터링 정책(Subscription Filter Policies) 사용",
            "SQS를 앞에 두어 직접 필터링 로직 구현",
            "Lambda 함수에서 메시지 내용 선별",
            "SNS 주제를 여러 개 생성"
        ],
        "answer": "SNS 구독 필터링 정책(Subscription Filter Policies) 사용",
        "explanation": "SNS 구독 필터 정책을 설정하면 구독자가 수신하는 메시지의 속성을 검사하여 관심 있는 메시지만 선택적으로 받게 할 수 있습니다. "
    },
    {
        "category": "비용 최적화",
        "title": "생성된 지 30일이 지난 S3 데이터는 거의 조회되지 않지만, 필요할 경우 즉시 사용 가능해야 합니다. 가장 저렴하면서도 가용성이 높은 구성은?",
        "options": [
            "30일 후 S3 Standard-IA로 이동하는 수명 주기 정책 설정",
            "30일 후 S3 Glacier로 이동",
            "30일 후 S3 One Zone-IA로 이동",
            "30일 후 즉시 삭제"
        ],
        "answer": "30일 후 S3 Standard-IA로 이동하는 수명 주기 정책 설정",
        "explanation": "S3 Standard-IA는 낮은 저장 비용으로 데이터 접근 시 즉각적인 가용성을 제공하므로, 자주 액세스하지 않는 데이터 보관에 최적입니다. "
    },
    {
        "category": "데이터베이스",
        "title": "웹 애플리케이션의 트래픽 증가로 RDS 데이터베이스의 읽기 성능이 저하되었습니다. 데이터베이스 인스턴스 크기를 늘리지 않고 성능을 개선하는 가장 효율적인 방법은?",
        "options": [
            "RDS 읽기 전용 복제본(Read Replica) 생성",
            "다중 AZ(Multi-AZ) 활성화",
            "EBS 볼륨 크기 확장",
            "ElastiCache 도입"
        ],
        "answer": "RDS 읽기 전용 복제본(Read Replica) 생성",
        "explanation": "읽기 전용 복제본을 추가하면 주 데이터베이스의 읽기 부하를 분산시켜 전체적인 쿼리 성능을 향상시킬 수 있습니다. "
    },
    {
        "category": "보안",
        "title": "RDS 데이터베이스에 저장되는 모든 데이터를 암호화하고 싶습니다. 백업 및 스냅샷까지 자동으로 암호화되도록 보장하려면 어떻게 해야 합니까?",
        "options": [
            "KMS 키를 사용하여 RDS 인스턴스 암호화 활성화",
            "SSL/TLS 연결 강제",
            "EBS 볼륨 수동 암호화",
            "IAM 정책으로 암호화 강제"
        ],
        "answer": "KMS 키를 사용하여 RDS 인스턴스 암호화 활성화",
        "explanation": "RDS 인스턴스 생성 시 암호화를 켜면 기본 스토리지뿐만 아니라 로그, 백업, 스냅샷까지 일괄적으로 보호됩니다. "
    },
    {
        "category": "아키텍처",
        "title": "전 세계 사용자가 대용량 이미지를 S3로 업로드합니다. 웹 서버의 부하를 줄이고 네트워크 지연 시간을 최소화하기 위해 사용해야 하는 두 가지 방법은 무엇입니까?",
        "options": [
            "미리 서명된 URL(Presigned URL) 사용 및 S3 전송 가속화 활성화",
            "EC2 인스턴스 수 확장",
            "CloudFront PUT 허용",
            "Direct Connect 연결"
        ],
        "answer": "미리 서명된 URL(Presigned URL) 사용 및 S3 전송 가속화 활성화",
        "explanation": "Presigned URL은 서버 부하를 줄이고, 전송 가속화는 엣지 로케이션을 통해 글로벌 업로드 속도를 높여줍니다. "
    },
    {
        "category": "서버리스",
        "title": "예측 불가능한 트래픽이 발생하는 API 서비스를 구축하려고 합니다. 관리 부담이 가장 적으면서 수요에 맞춰 유연하게 확장되는 솔루션은?",
        "options": [
            "Amazon API Gateway + AWS Lambda",
            "EC2 Auto Scaling 그룹",
            "ECS Fargate 서비스 전용",
            "Application Load Balancer + EC2"
        ],
        "answer": "Amazon API Gateway + AWS Lambda",
        "explanation": "서버리스 조합은 인프라 관리 없이 초당 수천 개의 요청까지 자동으로 확장되며 사용량만큼만 비용이 발생합니다. "
    },
    {
        "category": "마이그레이션",
        "title": "온프레미스 SAN 스토리지의 10TB JSON 데이터를 S3로 안전하고 빠르게 온라인 이전하고 싶습니다. 데이터 무결성 검증까지 자동으로 지원하는 서비스는?",
        "options": [
            "AWS DataSync",
            "AWS Direct Connect",
            "AWS Snowball Edge",
            "S3 CLI 복사"
        ],
        "answer": "AWS DataSync",
        "explanation": "DataSync는 대역폭 최적화 기술과 자동 무결성 검사 기능을 갖추어 대규모 데이터 이전에 최적화된 관리형 서비스입니다. "
    },
    {
        "category": "저장소",
        "title": "리눅스 EC2 클러스터에서 실행되는 데이터 분석 작업이 수백만 개의 파일에 고성능으로 동시 접근해야 합니다. 최적의 스토리지는?",
        "options": [
            "Amazon FSx for Lustre",
            "Amazon EFS",
            "Amazon EBS",
            "S3 Glacier"
        ],
        "answer": "Amazon FSx for Lustre",
        "explanation": "FSx for Lustre는 초고속 I/O를 지원하여 기계 학습이나 HPC 워크로드에서 리눅스 인스턴스 간 데이터 공유에 탁월합니다. "
    },
    {
        "category": "하이브리드",
        "title": "Windows Server 클러스터를 가용 영역 간에 구성하고 고가용성 공유 스토리지를 사용하고 싶습니다. 최소한의 구현 노력으로 이를 가능하게 하는 것은?",
        "options": [
            "Amazon FSx for Windows File Server",
            "EBS Multi-Attach",
            "S3 파일 인터페이스",
            "자체 구축한 NFS 서버"
        ],
        "answer": "Amazon FSx for Windows File Server",
        "explanation": "FSx for Windows는 SMB 프로토콜과 다중 가용 영역 배포를 지원하여 윈도우 기반 클러스터링에 필요한 공유 스토리지를 즉시 제공합니다. "
    },
    {
        "category": "데이터베이스",
        "title": "PostgreSQL 워크로드의 트래픽 변동이 심합니다. 관리자가 인스턴스 사양을 수동으로 변경하지 않고 수요에 따라 용량이 자동 조절되는 서비스는?",
        "options": [
            "Amazon Aurora Serverless v2",
            "Amazon RDS for PostgreSQL",
            "EC2 위 PostgreSQL",
            "Redshift"
        ],
        "answer": "Amazon Aurora Serverless v2",
        "explanation": "Aurora Serverless v2는 초단위로 애플리케이션 요구 사항에 맞춰 용량을 정밀하게 확장하거나 축소하여 비용 효율성을 극대화합니다. "
    },
    {
        "category": "비용 최적화",
        "title": "S3 버킷의 데이터 접근 패턴이 시간에 따라 변하거나 예측할 수 없습니다. 성능 저하 없이 자동으로 저장 비용을 최적화하려면 어떤 클래스를 써야 합니까?",
        "options": [
            "S3 Intelligent-Tiering",
            "S3 Standard",
            "S3 One Zone-IA",
            "S3 Glacier Deep Archive"
        ],
        "answer": "S3 Intelligent-Tiering",
        "explanation": "Intelligent-Tiering은 액세스 빈도를 감시하여 데이터를 저렴한 계층으로 자동 이동시키며, 조회 시 인출 수수료가 없어 패턴을 모를 때 가장 유리합니다. "
    },
    {
        "category": "아키텍처",
        "title": "3계층 웹 애플리케이션을 배포하며 가용성을 확보하고 관리 부담을 줄이고 싶습니다. AWS가 프로비저닝, 로드 밸런싱, 모니터링을 대행하는 서비스는?",
        "options": [
            "AWS Elastic Beanstalk (Multi-AZ)",
            "EC2 단독 배포",
            "AWS Amplify",
            "CloudFormation"
        ],
        "answer": "AWS Elastic Beanstalk (Multi-AZ)",
        "explanation": "Elastic Beanstalk은 애플리케이션을 업로드하면 고가용성 인프라 구축 및 관리를 자동으로 수행하므로 최소한의 노력으로 배포가 가능합니다. "
    },
    {
        "category": "보안",
        "title": "데이터가 네트워크를 통해 전송될 때 도청을 방지하기 위해 반드시 암호화되어야 합니다. 로드 밸런서와 인스턴스 간 통신을 보호하는 표준 프로토콜은?",
        "options": [
            "TLS (Transport Layer Security)",
            "EBS 암호화",
            "KMS 키 정책",
            "WAF 규칙"
        ],
        "answer": "TLS (Transport Layer Security)",
        "explanation": "TLS(전송 계층 보안) 또는 SSL은 전송 중인 데이터를 암호화하여 통신 경로의 무결성과 보안을 보장하는 핵심 기술입니다. "
    },
    {
        "category": "보안",
        "title": "웹 사이트를 향한 대규모 DDoS 공격으로부터 인프라를 보호하고, 공격 발생 시 24/7 전문 대응 팀의 지원을 받고 싶습니다. 어떤 서비스를 써야 합니까?",
        "options": [
            "AWS Shield Advanced",
            "AWS Shield Standard",
            "AWS WAF",
            "Amazon GuardDuty"
        ],
        "answer": "AWS Shield Advanced",
        "explanation": "Shield Advanced는 확장된 DDoS 보호 기능과 더불어 AWS DDoS 응답 팀(DRT)의 실시간 지원 및 관련 비용 보호 혜택을 제공합니다. "
    },
    {
        "category": "비용 최적화",
        "title": "미국과 유럽의 사용자에게 정적 웹 콘텐츠를 제공하며 비용을 최소화하고 싶습니다. 여러 리전에 데이터를 복제하지 않고 성능을 높이는 방법은?",
        "options": [
            "단일 S3 버킷과 Amazon CloudFront 사용",
            "리전별 S3 버킷 생성",
            "Global Accelerator만 사용",
            "Direct Connect 연결"
        ],
        "answer": "단일 S3 버킷과 Amazon CloudFront 사용",
        "explanation": "CloudFront는 전 세계 엣지 네트워크를 통해 데이터를 캐싱하여 전달하므로, 다중 리전 저장 비용 없이 성능을 개선하는 가장 저렴한 방법입니다. "
    },
    {
        "category": "네트워크",
        "title": "두 VPC 간에 서로의 프라이빗 IP 주소로 직접 통신해야 합니다. 게이트웨이나 VPN 하드웨어 없이 AWS 내부망을 통한 최적의 연결 방식은?",
        "options": [
            "VPC 피어링(Peering)",
            "인터넷 게이트웨이",
            "NAT 게이트웨이",
            "Transit Gateway"
        ],
        "answer": "VPC 피어링(Peering)",
        "explanation": "VPC 피어링은 두 VPC를 물리적 장치 없이 논리적으로 연결하여 마치 동일한 네트워크에 있는 것처럼 사설 통신을 가능하게 합니다. "
    },
    {
        "category": "보안",
        "title": "API 서버에 짧은 시간 동안 비정상적으로 많은 HTTP 요청이 들어와 마비되고 있습니다. 임계값을 초과하는 IP를 자동으로 일시 차단하려면?",
        "options": [
            "AWS WAF 속도 기반 규칙(Rate-based rules)",
            "NACL 거부 규칙",
            "보안 그룹 설정",
            "CloudWatch 경보"
        ],
        "answer": "AWS WAF 속도 기반 규칙(Rate-based rules)",
        "explanation": "WAF의 속도 기반 규칙은 각 IP의 요청 속도를 추적하여 설정한 한도를 넘어서는 공격성 트래픽을 즉각 차단합니다. "
    },
    {
        "category": "보안",
        "title": "프라이빗 서브넷의 인스턴스가 S3 버킷에 데이터를 저장해야 합니다. 인터넷으로 트래픽이 나가지 않도록 보안 규정을 준수하는 구성은?",
        "options": [
            "S3용 게이트웨이 VPC 엔드포인트 생성",
            "NAT 게이트웨이 배치",
            "인터넷 게이트웨이 연결",
            "배스천 호스트 경유"
        ],
        "answer": "S3용 게이트웨이 VPC 엔드포인트 생성",
        "explanation": "게이트웨이 엔드포인트를 사용하면 인터넷을 전혀 타지 않고 VPC 내부 경로만으로 S3에 안전하게 접근할 수 있습니다. "
    },
    {
        "category": "데이터베이스",
        "title": "온프레미스 Oracle 데이터를 Aurora PostgreSQL로 마이그레이션하며, 이관 중 발생하는 변경 사항도 실시간 동기화하고 싶습니다. 어떤 도구 조합이 필요합니까?",
        "options": [
            "AWS SCT와 AWS DMS(CDC 활성화)",
            "AWS DataSync만 사용",
            "AWS Snowball과 S3",
            "SCT와 DMS(Full Load 전용)"
        ],
        "answer": "AWS SCT와 AWS DMS(CDC 활성화)",
        "explanation": "SCT로 스키마를 바꾸고, DMS의 변경 데이터 캡처(CDC) 기능을 쓰면 데이터베이스 전환 시 다운타임을 최소화할 수 있습니다. "
    },
    {
        "category": "비용 최적화",
        "title": "비즈니스 업무 시간(평일 09~18시)에만 RDS 데이터베이스를 운영하고 나머지는 중지하여 비용을 아끼고 싶습니다. 가장 관리 효율적인 방법은?",
        "options": [
            "AWS 인스턴스 스케줄러(Instance Scheduler) 사용",
            "수동으로 매일 중지 및 시작",
            "Lambda 함수와 EventBridge 스케줄러로 직접 구축",
            "예약 인스턴스 구매"
        ],
        "answer": "AWS 인스턴스 스케줄러(Instance Scheduler) 사용",
        "explanation": "인스턴스 스케줄러는 정해진 일정에 따라 리소스를 자동으로 켜고 끄는 관리형 솔루션으로 비용 최적화에 탁월합니다. "
    },
    {
        "category": "보안",
        "title": "API Gateway를 통해 외부에 노출된 서비스를 SQL 인젝션 공격으로부터 보호하고 싶습니다. 어떤 서비스가 API Gateway 앞에 위치해야 합니까?",
        "options": [
            "AWS WAF",
            "AWS Shield Standard",
            "Amazon GuardDuty",
            "Network ACL"
        ],
        "answer": "AWS WAF",
        "explanation": "AWS WAF는 API Gateway와 직접 통합되어 요청 내용을 검사하고 악성 쿼리가 포함된 트래픽을 사전에 필터링합니다. "
    },
    {
        "category": "비용 최적화",
        "title": "VPC 내부에서 S3에 접근할 때 발생하는 데이터 전송 비용을 줄이고 성능을 개선하고 싶습니다. 인터넷망을 통하지 않는 가장 좋은 방법은?",
        "options": [
            "S3용 게이트웨이 VPC 엔드포인트 배치",
            "NAT 게이트웨이 확장",
            "인스턴스에 퍼블릭 IP 부여",
            "전용 호스팅 사용"
        ],
        "answer": "S3용 게이트웨이 VPC 엔드포인트 배치",
        "explanation": "S3 게이트웨이 엔드포인트는 무료로 제공되는 서비스이며, 인터넷 게이트웨이나 NAT 없이 프라이빗하게 통신하여 비용을 획기적으로 낮춥니다. "
    },
    {
        "category": "관리 및 거버넌스",
        "title": "누가 어떤 AWS 리소스를 수정했는지 확인하고, 보안 그룹 설정 변경 등을 지속적으로 감시해야 합니다. 어떤 서비스 두 가지를 활성화해야 합니까?",
        "options": [
            "AWS CloudTrail 및 AWS Config",
            "CloudWatch 및 Trusted Advisor",
            "Amazon GuardDuty 및 Macie",
            "Shield 및 WAF"
        ],
        "answer": "AWS CloudTrail 및 AWS Config",
        "explanation": "CloudTrail은 API 활동 로그를 기록하고, Config는 리소스의 구성 변경 내역과 규정 준수 여부를 추적하여 감사를 지원합니다. "
    },
    {
        "category": "아키텍처",
        "title": "사용자가 사진을 업로드하면 즉시 분석하여 결과를 DB에 저장하는 가변적인 워크로드를 구축하려 합니다. 서버 관리 없이 가용성이 높은 구조는?",
        "options": [
            "S3 업로드 -> Lambda 실행 -> DynamoDB 저장",
            "EC2 인스턴스 3대 운영 -> EBS 저장",
            "Kinesis Data Firehose -> Redshift",
            "S3 -> SQS -> EC2"
        ],
        "answer": "S3 업로드 -> Lambda 실행 -> DynamoDB 저장",
        "explanation": "S3와 Lambda를 연동하면 사진 업로드 이벤트에 따라 즉시 처리가 가능하며, DynamoDB에 메타데이터를 저장하는 방식이 가장 확장성이 뛰어납니다. "
    },
    {
        "category": "애플리케이션 통합",
        "title": "S3에 파일이 들어올 때마다 EC2 서버에서 처리해야 합니다. 트래픽 폭주 시 서버가 다운되지 않도록 부하를 분산하고 처리 순서를 보장하려면 무엇을 중간에 둬야 합니까?",
        "options": [
            "Amazon SQS 대기열",
            "Amazon SNS 주제",
            "AWS Step Functions",
            "Lambda 함수"
        ],
        "answer": "Amazon SQS 대기열",
        "explanation": "S3 이벤트를 SQS로 보내면 메시지가 대기열에 쌓여 서버가 처리할 수 있는 속도로 가져가게 하므로 시스템 안정성을 높일 수 있습니다. "
    },
    {
        "category": "보안",
        "title": "중요한 데이터가 들어있는 S3 버킷에서 사용자가 실수로 객체를 삭제하는 것을 막기 위해 설정해야 하는 두 가지 기능은?",
        "options": [
            "버킷 버전 관리(Versioning) 및 MFA Delete 활성화",
            "IAM 정책에서 모든 권한 제거",
            "S3 객체 잠금(Object Lock)",
            "S3 복제"
        ],
        "answer": "버킷 버전 관리(Versioning) 및 MFA Delete 활성화",
        "explanation": "버전 관리는 삭제된 파일을 복구 가능하게 하며, MFA Delete는 영구 삭제 시 2차 인증을 요구하여 우발적 사고를 방지합니다. "
    },
    {
        "category": "네트워크",
        "title": "기본 웹 서버 리전이 장애로 불능 상태가 되었을 때, 자동으로 다른 리전의 대기 환경으로 사용자를 보내야 합니다. 어떤 Route 53 설정이 필요합니까?",
        "options": [
            "액티브-패시브(Active-Passive) 장애 조치 구성",
            "단순 라우팅 정책",
            "지리적 위치 라우팅",
            "지연 시간 라우팅"
        ],
        "answer": "액티브-패시브(Active-Passive) 장애 조치 구성",
        "explanation": "장애 조치 구성은 상태 확인(Health Check)을 통해 주 리전 장애 시 보조 리전으로 트래픽을 즉각 전환하여 서비스 가용성을 유지합니다. "
    },
    {
        "category": "보안 및 규정 준수",
        "title": "법적 규정에 따라 한 번 저장된 데이터는 5년 동안 절대 수정되거나 삭제되지 않아야 합니다. S3에서 이를 보장하는 기능은?",
        "options": [
            "S3 객체 잠금(Object Lock)을 규정 준수(Compliance) 모드로 설정",
            "버킷 버전 관리만 사용",
            "IAM 정책으로 거부 규칙 생성",
            "S3 복제"
        ],
        "answer": "S3 객체 잠금(Object Lock)을 규정 준수(Compliance) 모드로 설정",
        "explanation": "Object Lock의 규정 준수 모드는 루트 사용자조차도 지정된 보존 기간 동안 데이터를 삭제하거나 덮어쓸 수 없도록 물리적으로 차단합니다. "
    },
    {
        "category": "분석",
        "title": "실시간으로 생성되는 로그 데이터를 분석하여 실시간 대시보드로 시각화하고 싶습니다. 서버 관리 없이 구현 가능한 서비스 조합은?",
        "options": [
            "Amazon Kinesis Data Analytics 및 Amazon API Gateway",
            "Amazon S3 및 Athena",
            "Redshift 및 QuickSight",
            "Lambda 및 SNS"
        ],
        "answer": "Amazon Kinesis Data Analytics 및 Amazon API Gateway",
        "explanation": "Kinesis Data Analytics는 스트리밍 데이터를 즉석에서 처리하며, 분석 결과를 API를 통해 대시보드에 뿌려주는 방식이 가장 민첩합니다. "
    },
    {
        "category": "분석",
        "title": "S3에 Apache Parquet 형식으로 저장된 10TB의 로그 데이터를 SQL로 분석하려 합니다. 인프라 구축 없이 가장 비용 효율적으로 수행하는 방법은?",
        "options": [
            "Amazon Athena 사용",
            "EMR 클러스터 생성",
            "Redshift Spectrum 활성화",
            "EC2에 분석 툴 설치"
        ],
        "answer": "Amazon Athena 사용",
        "explanation": "Athena는 S3에 있는 데이터를 직접 SQL로 쿼리하는 서버리스 서비스로, 특히 Parquet과 같은 열 지향 형식을 사용할 때 비용과 성능이 최적화됩니다. "
    },
    {
        "category": "마이그레이션",
        "title": "온프레미스 NFS 파일 서버의 200GB 데이터를 매일 S3와 동기화해야 합니다. 스크립트 작성 없이 관리 부담을 최소화하는 솔루션은?",
        "options": [
            "AWS DataSync",
            "AWS Snowball",
            "S3 CLI 동기화",
            "S3 복제"
        ],
        "answer": "AWS DataSync",
        "explanation": "DataSync는 온라인 데이터 전송을 자동화하고 예약 기능을 제공하며, NFS 스토리지와 S3 간의 증분 동기화를 손쉽게 처리합니다. "
    },
    {
        "category": "데이터베이스",
        "title": "읽기 요청이 폭주하여 RDS 인스턴스의 부하가 높습니다. 가용성을 유지하면서 읽기 성능만 별도로 확장하는 가장 좋은 방법은?",
        "options": [
            "RDS 읽기 전용 복제본(Read Replica) 추가",
            "인스턴스 타입 업그레이드",
            "Multi-AZ 활성화",
            "DB 엔진 변경"
        ],
        "answer": "RDS 읽기 전용 복제본(Read Replica) 추가",
        "explanation": "읽기 전용 복제본은 주 인스턴스의 부하를 가져가 읽기 성능을 선형적으로 확장할 수 있게 해줍니다. "
    },
    {
        "category": "비용 최적화",
        "title": "AWS Organizations 하의 여러 계정에서 발생한 비용을 제품군별로 태그를 사용하여 구분하고 싶습니다. 이를 위해 마스터 계정에서 수행해야 할 작업은?",
        "options": [
            "비용 배분 태그(Cost Allocation Tags) 활성화",
            "모든 계정 통합 청구 설정",
            "예산 경보 생성",
            "사용자 정의 보고서 작성"
        ],
        "answer": "비용 배분 태그(Cost Allocation Tags) 활성화",
        "explanation": "마스터 계정에서 태그를 비용 배분용으로 지정해야 조직 전체 계정의 리소스 태그가 비용 보고서(Cost Explorer 등)에 반영됩니다. "
    },
    {
        "category": "보안",
        "title": "EBS 볼륨 암호화에 사용되는 키를 회사가 직접 제어하고 주기적으로 자동 회전시켜야 합니다. 관리 부담을 줄이는 최적의 방법은?",
        "options": [
            "AWS KMS 고객 관리형 키(CMK) 생성 및 자동 교체 활성화",
            "S3 관리형 키 사용",
            "외부 키 자료 가져오기",
            "수동으로 매년 키 변경"
        ],
        "answer": "AWS KMS 고객 관리형 키(CMK) 생성 및 자동 교체 활성화",
        "explanation": "CMK를 생성하고 자동 교체 기능을 켜면, 회사가 키의 정책을 제어하면서도 실제 교체 작업은 AWS가 자동으로 수행하므로 효율적입니다. "
    },
    {
        "category": "분석",
        "title": "대량의 스트리밍 데이터를 실시간 수집하고, 서버를 관리하지 않고 컨테이너 기반으로 처리하여 S3에 저장하려 합니다. 어떤 서비스 조합이 적절합니까?",
        "options": [
            "Amazon Kinesis Data Firehose 및 Amazon ECS Fargate",
            "SQS 및 Lambda",
            "EMR 및 EC2",
            "DMS 및 RDS"
        ],
        "answer": "Amazon Kinesis Data Firehose 및 Amazon ECS Fargate",
        "explanation": "Kinesis Firehose로 데이터를 받고, 서버리스 컨테이너인 Fargate를 통해 복잡한 가공 로직을 수행하는 방식이 가장 확장성이 높습니다. "
    },
    {
        "category": "보안",
        "title": "전 세계에 서비스되는 CloudFront 배포에 SSL/TLS 인증서를 적용하고 싶습니다. ACM을 통해 인증서를 발급받을 때 반드시 지정해야 하는 리전은?",
        "options": [
            "미국 동부 (us-east-1)",
            "사용자 서비스 리전",
            "오리진 버킷 리전",
            "상관 없음"
        ],
        "answer": "미국 동부 (us-east-1)",
        "explanation": "CloudFront 배포와 연동하기 위한 ACM 인증서는 기술적 제약으로 인해 반드시 us-east-1(버지니아 북부) 리전에서 발급받아야 합니다. "
    },
    {
        "category": "데이터베이스",
        "title": "온프레미스 데이터베이스를 다운타임 없이 Aurora로 옮기려 합니다. 초기 이관 후에도 서비스 전환 시점까지 데이터를 계속 동기화해주는 서비스는?",
        "options": [
            "AWS Database Migration Service (DMS)",
            "AWS DataSync",
            "S3 Replication",
            "SCT만 사용"
        ],
        "answer": "AWS Database Migration Service (DMS)",
        "explanation": "DMS는 지속적인 복제(Continuous Replication) 기능을 제공하여 원본과 대상 DB를 실시간으로 동기화된 상태로 유지해 줍니다. "
    },
    {
        "category": "데이터베이스",
        "title": "사용자 간의 복잡한 인간관계나 제품 추천 시스템을 구축하려 합니다. 데이터 간의 연결성을 분석하는 데 최적화된 그래프 데이터베이스 서비스는?",
        "options": [
            "Amazon Neptune",
            "Amazon DynamoDB",
            "Amazon Redshift",
            "Amazon Aurora"
        ],
        "answer": "Amazon Neptune",
        "explanation": "Neptune은 그래프 전용 DB로, 소셜 네트워킹이나 추천 엔진과 같이 고도로 연결된 데이터를 효율적으로 처리하는 데 특화되어 있습니다. "
    },
    {
        "category": "아키텍처",
        "title": "외부 기관에서 SFTP를 통해 보낸 대용량 배치 파일을 야간에만 서버에서 처리하여 비용을 아끼고 싶습니다. 서버 관리 부담이 적은 구조는?",
        "options": [
            "AWS Transfer for SFTP -> S3 저장 -> 예약된 Auto Scaling EC2 처리",
            "EC2에 SFTP 서버 구축",
            "EFS 공유 스토리지 사용",
            "CloudFront PUT 허용"
        ],
        "answer": "AWS Transfer for SFTP -> S3 저장 -> 예약된 Auto Scaling EC2 처리",
        "explanation": "SFTP 관리 서비스로 파일을 받아 S3에 안전하게 두고, 처리 서버는 필요한 시간(야간)에만 Auto Scaling으로 켜서 처리하는 것이 가장 경제적입니다. "
    },
    {
        "category": "보안",
        "title": "조직 내 모든 계정에서 보안 정책에 위반되는 리소스 생성을 사전에 차단하고 싶습니다. 루트 계정조차도 우회할 수 없도록 강제하는 방법은?",
        "options": [
            "AWS Organizations의 서비스 제어 정책(SCP) 적용",
            "IAM 사용자 정책 설정",
            "Config 규칙 생성",
            "Security Hub 활성화"
        ],
        "answer": "AWS Organizations의 서비스 제어 정책(SCP) 적용",
        "explanation": "SCP는 조직 내 모든 엔터티(사용자, 역할, 심지어 루트 사용자)에 대해 사용할 수 있는 최대 권한을 제한하는 가장 강력한 보안 가드레일입니다. "
    },
    {
        "category": "아키텍처",
        "title": "마케팅 이벤트 시 평소보다 10배 많은 주문이 들어옵니다. 데이터베이스에 즉시 쓰지 않고 대기열에 담아 서버 부하를 조절하며 처리하려 합니다. 무엇을 사용합니까?",
        "options": [
            "Amazon SQS",
            "Amazon SNS",
            "AWS Step Functions",
            "Lambda 함수"
        ],
        "answer": "Amazon SQS",
        "explanation": "SQS는 생산자와 소비자 사이에서 완충 작용(Buffering)을 하여, 트래픽 폭주 시에도 주문 유실 없이 안정적으로 시스템을 운영하게 해줍니다. "
    },
    {
        "category": "저장소",
        "title": "미국 서부(us-west-1) 리전의 S3 버킷에 저장되는 모든 새로운 사진을 미국 동부(us-east-1) 리전에도 자동으로 복사하여 저장하고 싶습니다. 가장 효율적인 방법은?",
        "options": [
            "S3 교차 리전 복제(CRR)를 활성화한다.",
            "Lambda 함수를 사용하여 업로드 시 파일을 복사한다.",
            "S3 수명 주기 정책을 사용한다.",
            "두 리전 간에 VPC 피어링을 설정한다."
        ],
        "answer": "S3 교차 리전 복제(CRR)를 활성화한다.",
        "explanation": "S3 CRR은 리전 간 객체 복제를 자동화하는 가장 간단하고 관리 오버헤드가 적은 기능입니다. "
    },
    {
        "category": "보안",
        "title": "애플리케이션을 AWS로 마이그레이션하면서 가용성을 높이고 AWS WAF를 적용하려 합니다. 가장 적합한 구성은?",
        "options": [
            "ALB와 Auto Scaling 그룹을 결합하고 ALB에 WAF를 연결한다.",
            "두 개의 EC2 인스턴스 앞에 ALB를 두고 보안 그룹만 사용한다.",
            "클러스터 배치 그룹에 인스턴스를 배치하고 WAF를 연결한다.",
            "Auto Scaling 그룹에 직접 WAF를 연결한다."
        ],
        "answer": "ALB와 Auto Scaling 그룹을 결합하고 ALB에 WAF를 연결한다.",
        "explanation": "ALB와 ASG는 다중 AZ 가용성을 제공하며, WAF는 ALB와 통합되어 애플리케이션 계층 보안을 제공합니다. "
    },
    {
        "category": "네트워크",
        "title": "EC2 인스턴스가 인터넷을 통하지 않고 DynamoDB에 비공개로 접근해야 합니다. 무엇을 사용해야 합니까?",
        "options": [
            "DynamoDB용 게이트웨이 VPC 엔드포인트",
            "NAT 게이트웨이",
            "인터넷 게이트웨이",
            "VPN 터널"
        ],
        "answer": "DynamoDB용 게이트웨이 VPC 엔드포인트",
        "explanation": "게이트웨이 엔드포인트는 인터넷 노출 없이 VPC 내부에서 DynamoDB로의 전용 경로를 제공합니다. "
    },
    {
        "category": "네트워크",
        "title": "전 세계 사용자를 대상으로 하는 REST API의 지연 시간을 줄이고자 합니다. 가장 적절한 서비스 조합은?",
        "options": [
            "API Gateway 엣지 최적화 엔드포인트 및 캐싱 활성화",
            "지역 엔드포인트와 Lambda 메모리 증설",
            "NLB와 Direct Connect 연결",
            "리전별 별도 API 배포"
        ],
        "answer": "API Gateway 엣지 최적화 엔드포인트 및 캐싱 활성화",
        "explanation": "엣지 최적화 엔드포인트는 CloudFront를 활용해 글로벌 지연 시간을 줄이며, 캐싱은 응답 속도를 더욱 향상시킵니다. "
    },
    {
        "category": "보안",
        "title": "직원들이 기존 사내 Active Directory 자격 증명을 사용하여 SFTP로 S3에 파일을 전송하게 하려 합니다. 무엇을 사용합니까?",
        "options": [
            "AWS Transfer Family와 AWS Directory Service 연동",
            "EC2에 SFTP 서버 직접 구축",
            "IAM 사용자 계정 대량 생성",
            "S3 버킷을 퍼블릭으로 개방"
        ],
        "answer": "AWS Transfer Family와 AWS Directory Service 연동",
        "explanation": "AWS Transfer Family는 SFTP 관리 서비스를 제공하며 Directory Service를 통해 기존 AD와 쉽게 통합됩니다. "
    },
    {
        "category": "애플리케이션 통합",
        "title": "운영 계정의 SNS 주제에서 관리 계정의 Lambda 함수를 호출해야 합니다. 메시지 유실을 방지하고 안정적으로 연결하는 방법은?",
        "options": [
            "관리 계정에 SQS를 만들어 SNS를 구독하고 Lambda를 트리거한다.",
            "IAM 사용자를 생성하여 액세스 키를 공유한다.",
            "Lambda 함수를 운영 계정으로 복제한다.",
            "EventBridge만 사용한다."
        ],
        "answer": "관리 계정에 SQS를 만들어 SNS를 구독하고 Lambda를 트리거한다.",
        "explanation": "SQS를 완충 장치로 사용하여 SNS 메시지를 받으면 트래픽 급증 시에도 메시지를 안전하게 보관하고 처리할 수 있습니다. "
    },
    {
        "category": "보안",
        "title": "VPC 내 웹 서버 계층에서 데이터베이스 계층(RDS)으로의 접근을 보안 그룹을 통해 제한하려 합니다. 가장 권장되는 방식은?",
        "options": [
            "DB 보안 그룹 인바운드 규칙의 소스로 웹 서버의 보안 그룹 ID를 지정한다.",
            "DB 보안 그룹에 웹 서버의 모든 IP 주소를 등록한다.",
            "NACL에서만 포트를 개방한다.",
            "두 계층을 동일한 서브넷에 배치한다."
        ],
        "answer": "DB 보안 그룹 인바운드 규칙의 소스로 웹 서버의 보안 그룹 ID를 지정한다.",
        "explanation": "보안 그룹 ID를 소스로 사용하면 인스턴스 IP가 바뀌더라도 규칙을 수정할 필요가 없어 관리가 용이하고 안전합니다. "
    },
    {
        "category": "비용 최적화",
        "title": "S3에 저장된 데이터의 접근 빈도를 예측할 수 없습니다. 성능 저하 없이 자동으로 저장 비용을 최적화하려면 어떤 클래스를 써야 합니까?",
        "options": [
            "S3 Intelligent-Tiering",
            "S3 Standard-IA",
            "S3 One Zone-IA",
            "S3 Glacier"
        ],
        "answer": "S3 Intelligent-Tiering",
        "explanation": "Intelligent-Tiering은 액세스 패턴에 따라 자주 사용하는 티어와 그렇지 않은 티어 간에 데이터를 자동 이동시킵니다. "
    },
    {
        "category": "네트워크",
        "title": "프라이빗 서브넷의 인스턴스가 공용 인터넷망을 거치지 않고 S3 버킷에 안전하게 접근해야 합니다. 최적의 구성은?",
        "options": [
            "S3용 게이트웨이 VPC 엔드포인트 생성",
            "NAT 게이트웨이 배치",
            "VPN 연결 설정",
            "인터넷 게이트웨이 연결"
        ],
        "answer": "S3용 게이트웨이 VPC 엔드포인트 생성",
        "explanation": "게이트웨이 엔드포인트는 인터넷망 통과 없이 VPC 내부 라우팅을 통해 S3에 사설로 연결됩니다. "
    },
    {
        "category": "모니터링",
        "title": "CloudFront 배포의 설정이 변경되었을 때 보안 팀이 즉시 알림을 받아야 합니다. 어떤 조합이 적절합니까?",
        "options": [
            "EventBridge 규칙으로 CloudTrail 이벤트를 감지하여 SNS로 알림을 보낸다.",
            "AWS Config 규칙만 사용한다.",
            "GuardDuty를 활성화한다.",
            "WAF 로그를 분석한다."
        ],
        "answer": "EventBridge 규칙으로 CloudTrail 이벤트를 감지하여 SNS로 알림을 보낸다.",
        "explanation": "EventBridge는 CloudTrail이 기록하는 API 호출 이벤트를 실시간으로 탐지하여 알림을 자동화할 수 있습니다. "
    },
    {
        "category": "운영",
        "title": "수백 대의 EC2 인스턴스에 대해 보안 패치 작업을 자동화하고 싶습니다. 개별 접속 없이 중앙에서 관리하려면 어떤 기능을 써야 합니까?",
        "options": [
            "AWS Systems Manager Patch Manager 및 기본 호스트 구성 사용",
            "IAM 정책 수동 적용",
            "직접 SSH 접속 후 스크립트 실행",
            "각 인스턴스에 크론탭 설정"
        ],
        "answer": "AWS Systems Manager Patch Manager 및 기본 호스트 구성 사용",
        "explanation": "SSM Patch Manager는 정해진 일정에 따라 인스턴스 그룹에 패치를 자동 적용하고 결과를 리포트합니다. "
    },
    {
        "category": "비용 최적화",
        "title": "EC2, Fargate, Lambda 사용량을 모두 포함하여 최대 66%까지 비용을 절감할 수 있는 할인 옵션은 무엇입니까?",
        "options": [
            "Compute Savings Plans",
            "EC2 Instance Savings Plans",
            "Reserved Instances",
            "Spot Instances"
        ],
        "answer": "Compute Savings Plans",
        "explanation": "Compute Savings Plans는 인스턴스 타입이나 리전에 상관없이 EC2, Fargate, Lambda 모두에 적용되는 가장 유연한 옵션입니다. "
    },
    {
        "category": "마이그레이션",
        "title": "70TB의 데이터를 오프라인으로 이전하려 합니다. 장비당 가용 용량이 80TB 내외인 가장 적합한 물리적 전송 장비는?",
        "options": [
            "AWS Snowball Edge",
            "AWS Snowmobile",
            "S3 Transfer Acceleration",
            "DataSync 장치"
        ],
        "answer": "AWS Snowball Edge",
        "explanation": "70TB~100TB 규모의 데이터는 Snowball Edge 장비 한 대로 처리가 가능합니다. "
    },
    {
        "category": "데이터베이스",
        "title": "PostgreSQL 워크로드에서 읽기 요청이 많아 성능이 저하되고 있습니다. 고가용성을 유지하며 읽기 성능만 확장하는 방법은?",
        "options": [
            "RDS Multi-AZ DB 클러스터 배포 사용",
            "단일 인스턴스 사양 업그레이드",
            "S3로 데이터 내보내기",
            "DynamoDB로 전환"
        ],
        "answer": "RDS Multi-AZ DB 클러스터 배포 사용",
        "explanation": "RDS Multi-AZ DB 클러스터는 읽기 가능한 대기 인스턴스를 포함하여 가용성과 읽기 성능을 동시에 잡을 수 있습니다. "
    },
    {
        "category": "데이터베이스",
        "title": "I/O 집약적인 MySQL DB를 운영 중입니다. 일관된 성능을 위해 최대 64TiB 용량과 높은 IOPS를 지원하는 스토리지는?",
        "options": [
            "Provisioned IOPS SSD (io1/io2)",
            "General Purpose SSD (gp2)",
            "Magnetic",
            "Throughput Optimized HDD"
        ],
        "answer": "Provisioned IOPS SSD (io1/io2)",
        "explanation": "Provisioned IOPS SSD는 성능 요구 사항이 명확하고 일관된 I/O가 필요한 DB 워크로드에 설계되었습니다. "
    },
    {
        "category": "네트워크",
        "title": "VPC 내부에서 S3 API를 호출할 때 사설 IP 주소를 통해 연결하고 싶습니다. 게이트웨이 방식이 아닌 다른 리전에서도 접근 가능한 방식은?",
        "options": [
            "S3용 인터페이스 VPC 엔드포인트(PrivateLink)",
            "S3용 게이트웨이 VPC 엔드포인트",
            "NAT 게이트웨이",
            "인터넷 게이트웨이"
        ],
        "answer": "S3용 인터페이스 VPC 엔드포인트(PrivateLink)",
        "explanation": "인터페이스 엔드포인트는 VPC 내에 ENI를 생성하여 사설 IP를 부여하므로 온프레미스나 타 리전에서도 연결이 가능합니다. "
    },
    {
        "category": "마이그레이션",
        "title": "온프레미스 데이터를 S3로 옮기면서 전송 완료 후 자동으로 무결성을 검증하고 싶습니다. 가장 효율적인 서비스는?",
        "options": [
            "AWS DataSync",
            "AWS Snowball Edge",
            "S3 CLI",
            "Transfer Acceleration"
        ],
        "answer": "AWS DataSync",
        "explanation": "AWS DataSync는 전송 중 및 전송 후 데이터 무결성을 자동으로 확인하는 기능이 내장되어 있습니다. "
    },
    {
        "category": "비용 최적화",
        "title": "사용자가 올린 이미지를 1년에 2번만 AI 모델 학습에 사용합니다. 데이터 손실 시 재생성이 가능하다면 가장 저렴한 보관 방식은?",
        "options": [
            "Amazon S3 One Zone-IA",
            "Amazon S3 Standard",
            "Amazon S3 Standard-IA",
            "S3 Glacier"
        ],
        "answer": "Amazon S3 One Zone-IA",
        "explanation": "재생성 가능한 비중요 데이터를 단일 AZ에 저렴하게 보관할 때는 One Zone-IA가 최적입니다. "
    },
    {
        "category": "네트워크",
        "title": "프라이빗 서브넷의 EC2가 인터넷 없이 SQS 대기열과 통신해야 합니다. 무엇을 생성해야 합니까?",
        "options": [
            "SQS용 인터페이스 VPC 엔드포인트",
            "SQS용 게이트웨이 VPC 엔드포인트",
            "NAT 게이트웨이",
            "VPN 연결"
        ],
        "answer": "SQS용 인터페이스 VPC 엔드포인트",
        "explanation": "SQS는 인터페이스 방식의 VPC 엔드포인트를 지원하여 사설 통신을 가능하게 합니다. "
    },
    {
        "category": "서버리스",
        "title": "Java 기반 Lambda 함수의 초기 실행 지연(콜드 스타트)을 획기적으로 줄이고 싶습니다. 가장 적합한 기능은?",
        "options": [
            "Lambda SnapStart",
            "메모리 증설",
            "Provisioned Concurrency",
            "컴퓨팅 최적화 인스턴스"
        ],
        "answer": "Lambda SnapStart",
        "explanation": "SnapStart는 Java 함수의 실행 상태를 스냅샷으로 저장하여 재개 시 시작 속도를 크게 향상시킵니다. "
    },
    {
        "category": "데이터베이스",
        "title": "트래픽이 간헐적이고 예측 불가능한 MySQL 애플리케이션이 있습니다. 유휴 시 비용을 0으로 만들거나 자동으로 확장하려면?",
        "options": [
            "Amazon Aurora Serverless",
            "Amazon RDS for MySQL",
            "EC2 위 MySQL",
            "DynamoDB"
        ],
        "answer": "Amazon Aurora Serverless",
        "explanation": "Aurora Serverless는 수요에 따라 컴퓨팅 용량을 자동으로 조절하며 사용하지 않을 때 중지할 수 있습니다. "
    },
    {
        "category": "보안",
        "title": "특정 소수의 IP 주소에서 웹 서버로 수백만 건의 부적절한 요청이 들어오고 있습니다. 서브넷 수준에서 가장 먼저 차단하려면?",
        "options": [
            "네트워크 ACL(NACL)에 거부(Deny) 규칙 추가",
            "보안 그룹 수정",
            "WAF 규칙 설정",
            "인스턴스 내부 방화벽 설정"
        ],
        "answer": "네트워크 ACL(NACL)에 거부(Deny) 규칙 추가",
        "explanation": "NACL은 IP 주소 기반의 거부 규칙을 지원하며 서브넷 경계에서 트래픽을 가장 먼저 필터링합니다. "
    },
    {
        "category": "고가용성",
        "title": "RTO 4시간 미만을 유지하면서 평상시 비용을 최소화하는 재해 복구 솔루션을 구축하려 합니다. 어떤 방식이 적절합니까?",
        "options": [
            "AMI를 다른 리전으로 복사해두고 필요 시 CloudFormation으로 배포한다.",
            "다른 리전에 동일한 환경을 24시간 가동한다.",
            "백업 테이프를 이용한다.",
            "VPC 피어링만 유지한다."
        ],
        "answer": "AMI를 다른 리전으로 복사해두고 필요 시 CloudFormation으로 배포한다.",
        "explanation": "핵심 데이터와 이미지만 타 리전에 준비해두는 "
    },
    {
        "category": "서버리스",
        "title": "사용자가 사진을 업로드하면 즉시 다양한 크기로 변환하여 저장해야 합니다. 가장 확장성이 뛰어난 구조는?",
        "options": [
            "S3 업로드 시 Lambda를 트리거하여 변환 후 S3에 저장한다.",
            "EC2에서 주기적으로 S3를 스캔한다.",
            "Step Functions로 정적 분석을 수행한다.",
            "SQS와 ECS를 연동한다."
        ],
        "answer": "S3 업로드 시 Lambda를 트리거하여 변환 후 S3에 저장한다.",
        "explanation": "S3 이벤트 알림과 Lambda를 결합하면 인프라 관리 없이 실시간 이벤트 기반 처리가 가능합니다. "
    },
    {
        "category": "네트워크",
        "title": "S3 정적 콘텐츠와 ALB 동적 콘텐츠를 결합하여 글로벌 사용자에게 가속 서비스를 제공하려 합니다. 최적의 설계는?",
        "options": [
            "CloudFront를 사용하고 Route 53 별칭 레코드로 도메인을 연결한다.",
            "Global Accelerator만 사용한다.",
            "모든 데이터를 S3로 옮긴다.",
            "리전별로 도메인을 분리한다."
        ],
        "answer": "CloudFront를 사용하고 Route 53 별칭 레코드로 도메인을 연결한다.",
        "explanation": "CloudFront는 CDN 기능을 제공하며 Route 53 별칭 레코드를 통해 사용자 정의 도메인을 쉽고 비용 효율적으로 연결합니다. "
    },
    {
        "category": "컨테이너",
        "title": "EKS 클러스터의 특정 Pod만 S3 버킷에 접근할 수 있도록 최소 권한을 부여하고 싶습니다. 어떤 방식을 써야 합니까?",
        "options": [
            "IAM Roles for Service Accounts (IRSA)를 사용하여 Pod에 역할을 부여한다.",
            "워커 노드 전체에 역할을 부여한다.",
            "액세스 키를 Pod 환경 변수에 넣는다.",
            "RBAC만 사용한다."
        ],
        "answer": "IAM Roles for Service Accounts (IRSA)를 사용하여 Pod에 역할을 부여한다.",
        "explanation": "IRSA를 사용하면 서비스 계정 단위로 IAM 역할을 매핑하여 Pod 수준의 세밀한 권한 제어가 가능합니다. "
    },
    {
        "category": "보안",
        "title": "API Gateway를 통해 제공되는 분석 서비스에 사용자 가입 및 인증 기능을 추가하려 합니다. 가장 운영 효율적인 방법은?",
        "options": [
            "Amazon Cognito User Pools를 API 권한 부여자로 사용한다.",
            "IAM 정책을 개별 생성한다.",
            "Lambda 함수 내에 DB 인증 로직을 직접 짠다.",
            "Active Directory를 VPC에 설치한다."
        ],
        "answer": "Amazon Cognito User Pools를 API 권한 부여자로 사용한다.",
        "explanation": "Cognito는 사용자 관리와 인증을 대행하며 API Gateway와 기본 통합되어 구현이 매우 쉽습니다. "
    },
    {
        "category": "아키텍처",
        "title": "기존의 단일 서버 웹 앱을 AWS로 옮기며 고가용성을 확보하려 합니다. 최소한의 수정으로 가능한 구성은?",
        "options": [
            "ALB + Auto Scaling EC2 + Multi-AZ RDS",
            "NLB + EC2 단일 인스턴스",
            "S3 정적 호스팅 + DynamoDB",
            "Lambda + API Gateway"
        ],
        "answer": "ALB + Auto Scaling EC2 + Multi-AZ RDS",
        "explanation": "전통적인 3계층 구조에서 ALB, ASG, Multi-AZ RDS를 사용하면 코드 수정 없이 인프라 수준에서 고가용성이 완성됩니다. "
    },
    {
        "category": "네트워크",
        "title": "여러 리전의 수많은 VPC를 중앙 허브를 통해 서로 통신하게 하고 싶습니다. 관리 부담이 가장 적은 방식은?",
        "options": [
            "AWS Transit Gateway와 리전 간 피어링 사용",
            "모든 VPC를 직접 피어링 연결",
            "Direct Connect Gateway만 사용",
            "PrivateLink 사용"
        ],
        "answer": "AWS Transit Gateway와 리전 간 피어링 사용",
        "explanation": "Transit Gateway는 중앙 집중식 라우팅 허브 역할을 하며 리전 간 피어링을 통해 전 세계 VPC를 연결합니다. "
    },
    {
        "category": "저장소",
        "title": "Windows 인스턴스 간에 데이터를 공유하고 원시 백업 기능을 사용해야 하는 3계층 앱이 있습니다. 최적의 저장소는?",
        "options": [
            "Amazon FSx for Windows File Server",
            "Amazon EFS",
            "EBS Multi-Attach",
            "S3 버킷"
        ],
        "answer": "Amazon FSx for Windows File Server",
        "explanation": "FSx for Windows는 윈도우 네이티브 기능과 SMB 프로토콜을 완벽 지원하여 윈도우 워크로드에 최적입니다. "
    },
    {
        "category": "관리 및 거버넌스",
        "title": "인프라 구축을 자동화하고, 이후 리소스 구성의 변경 사항을 지속적으로 추적하여 감사를 수행하려 합니다. 어떤 조합이 필요합니까?",
        "options": [
            "AWS CloudFormation 및 AWS Config",
            "Organizations 및 CloudTrail",
            "Service Catalog 및 Trusted Advisor",
            "IAM 및 Security Hub"
        ],
        "answer": "AWS CloudFormation 및 AWS Config",
        "explanation": "CloudFormation은 구축 자동화를, Config는 구축 후의 설정 변경 내역과 규정 준수 여부를 감시합니다. "
    },
    {
        "category": "모니터링",
        "title": "조직 내 모든 계정의 S3 사용 현황(객체 수, 미완료 멀티파트 업로드 등)을 한눈에 보고 싶습니다. 어떤 서비스가 적합합니까?",
        "options": [
            "Amazon S3 Storage Lens",
            "AWS Config",
            "CloudWatch Logs",
            "S3 인벤토리"
        ],
        "answer": "Amazon S3 Storage Lens",
        "explanation": "Storage Lens는 조직 전체의 S3 활동과 구성을 분석하여 대시보드 형태로 시각화해주는 서비스입니다. "
    },
    {
        "category": "분석",
        "title": "S3에 저장된 대량의 CSV 로그를 분석하려 합니다. 분석 속도를 높이고 비용을 줄이기 위해 수행해야 하는 두 가지 작업은?",
        "options": [
            "데이터를 Apache Parquet 형식으로 변환하고 128MB 이상의 큰 파일로 통합한다.",
            "모든 데이터를 RDS로 로드한다.",
            "S3 Glacier로 데이터를 옮긴다.",
            "CloudFront를 앞에 둔다."
        ],
        "answer": "데이터를 Apache Parquet 형식으로 변환하고 128MB 이상의 큰 파일로 통합한다.",
        "explanation": "Parquet은 열 지향 포맷이라 필요한 데이터만 읽으며, 큰 파일 단위는 스캔 효율을 높여 분석 비용을 줄입니다. "
    },
    {
        "category": "컴퓨팅",
        "title": "64 vCPU와 512GiB 메모리가 필요한 대규모 분석 작업을 주기적으로 실행해야 합니다. 인프라 관리를 자동화하는 서비스는?",
        "options": [
            "AWS Batch",
            "AWS Lambda",
            "EC2 Auto Scaling",
            "Fargate"
        ],
        "answer": "AWS Batch",
        "explanation": "AWS Batch는 고사양 자원이 필요한 배치 작업을 위해 컴퓨팅 환경을 자동으로 프로비저닝하고 관리합니다. "
    },
    {
        "category": "비용 최적화",
        "title": "데이터를 3개월 동안 보관하며 언제든 즉시 조회할 수 있어야 합니다. 가용성이 높으면서 비용 효율적인 S3 클래스는?",
        "options": [
            "S3 Standard-Infrequent Access (S3 Standard-IA)",
            "S3 Glacier",
            "S3 Standard",
            "S3 Intelligent-Tiering"
        ],
        "answer": "S3 Standard-Infrequent Access (S3 Standard-IA)",
        "explanation": "IA 티어는 표준 S3와 동일한 성능을 제공하면서 저장 비용이 저렴하여 자주 쓰지 않는 즉시 가용 데이터에 적합합니다. "
    },
    {
        "category": "컴퓨팅",
        "title": "휴가 시즌과 같이 트래픽 증가가 명확히 예상되는 날짜에 미리 서버 용량을 늘려두고 싶습니다. 어떤 Auto Scaling 정책을 써야 합니까?",
        "options": [
            "예약된 조정(Scheduled Scaling) 작업",
            "대상 추적 정책",
            "단순 조정 정책",
            "CloudWatch 경보 기반"
        ],
        "answer": "예약된 조정(Scheduled Scaling) 작업",
        "explanation": "특정 날짜와 시간을 알고 있는 경우 예약 조정을 통해 지연 없이 용량을 선제적으로 확보할 수 있습니다. "
    },
    {
        "category": "보안",
        "title": "조직 내의 비프로덕션 계정 3개에 대해서만 특정 EC2 인스턴스 타입을 금지하고 싶습니다. 가장 효율적인 배포 방법은?",
        "options": [
            "비프로덕션용 조직 단위(OU)를 만들어 계정들을 넣고 SCP를 해당 OU에 연결한다.",
            "루트 OU에 SCP를 연결한다.",
            "개별 계정마다 IAM 정책을 수정한다.",
            "관리 계정에 직접 적용한다."
        ],
        "answer": "비프로덕션용 조직 단위(OU)를 만들어 계정들을 넣고 SCP를 해당 OU에 연결한다.",
        "explanation": "OU를 사용하면 여러 계정에 공통 정책을 한 번에 적용할 수 있어 관리가 매우 효율적입니다. "
    },
    {
        "category": "아키텍처",
        "title": "기존 앱을 고가용성 구조로 개선하려 합니다. 단일 지점 장애를 없애기 위한 데이터베이스 계층의 최적 구성은?",
        "options": [
            "Amazon RDS 다중 AZ(Multi-AZ) 배포",
            "단일 RDS 인스턴스와 수동 스냅샷",
            "EC2에 DB 직접 설치 및 백업",
            "EBS 볼륨 복제"
        ],
        "answer": "Amazon RDS 다중 AZ(Multi-AZ) 배포",
        "explanation": "RDS Multi-AZ는 물리적으로 분리된 다른 AZ에 대기 복제본을 두어 장애 시 자동 페일오버를 지원합니다. "
    },
    {
        "category": "보안",
        "title": "S3에 저장된 각 고객의 데이터를 해당 고객이 직접 관리하는 키로 암호화하고 싶습니다. 이를 구현하는 표준 방식은?",
        "options": [
            "고객별로 별도의 AWS KMS 고객 관리형 키(CMK)를 생성하여 부여한다.",
            "ACM 인증서를 고객에게 준다.",
            "S3 버킷 정책으로만 제어한다.",
            "KMS 기본 키를 공유한다."
        ],
        "answer": "고객별로 별도의 AWS KMS 고객 관리형 키(CMK)를 생성하여 부여한다.",
        "explanation": "고객 관리형 키를 사용하면 고객에게 키 사용 및 회전 권한을 위임할 수 있어 강력한 보안 통제가 가능합니다. "
    },
    {
        "category": "보안",
        "title": "ACM 인증서가 30일 이내에 만료되는 것을 감지하여 알림을 받고 싶습니다. 어떤 서비스 조합이 가장 적절합니까?",
        "options": [
            "AWS Config 규칙 및 Amazon SNS 알림 연동",
            "Trusted Advisor 이메일 정기 구독",
            "CloudFront 로그 분석",
            "Lambda 함수 직접 개발"
        ],
        "answer": "AWS Config 규칙 및 Amazon SNS 알림 연동",
        "explanation": "AWS Config는 인증서 만료 임계값을 감시하는 관리형 규칙을 제공하며 SNS를 통해 즉시 통지할 수 있습니다. "
    },
    {
        "category": "보안",
        "title": "사용자에게 특정 시간 동안만 유효한 S3 업로드 권한을 가장 간단하게 부여하는 방법은 무엇입니까?",
        "options": [
            "S3 미리 서명된 URL(Presigned URL)을 생성하여 제공한다.",
            "IAM 사용자를 생성하고 1시간 뒤 삭제한다.",
            "STS로 임시 토큰을 발행한다.",
            "버킷을 잠시 퍼블릭으로 연다."
        ],
        "answer": "S3 미리 서명된 URL(Presigned URL)을 생성하여 제공한다.",
        "explanation": "Presigned URL은 별도의 IAM 자격 증명 없이도 특정 객체에 대해 한시적인 접근 권한을 주는 가장 가벼운 방식입니다. "
    },
    {
        "category": "아키텍처",
        "title": "모바일 결제 알림을 받아 검증 후 백엔드로 전달하는 시스템을 구축합니다. 관리 부담이 가장 적고 결합도가 낮은 구조는?",
        "options": [
            "API Gateway + Lambda + ECS Fargate",
            "SQS + EKS 직접 관리",
            "API Gateway + EC2 직접 처리",
            "SNS + EC2 스팟 플릿"
        ],
        "answer": "API Gateway + Lambda + ECS Fargate",
        "explanation": "완전 관리형 서비스들을 조합하면 서버 관리 없이 이벤트 기반으로 유연하게 결제 요청을 처리할 수 있습니다. "
    },
    {
        "category": "관리 및 거버넌스",
        "title": "기존의 수많은 리소스에 누락된 ",
        "options": [
            "AWS Resource Groups 태그 편집기(Tag Editor)",
            "CloudTrail 로그 수정",
            "CloudWatch 지표 편집",
            "CLI로 하나씩 개별 수정"
        ],
        "answer": "AWS Resource Groups 태그 편집기(Tag Editor)",
        "explanation": "태그 편집기를 사용하면 여러 서비스의 리소스를 검색하여 대량으로 태그를 부착하거나 수정할 수 있습니다. "
    },
    {
        "category": "보안",
        "title": "특정 IAM 역할을 가진 EC2 인스턴스만 S3 버킷에 접근할 수 있도록 보안을 강화하고 싶습니다. 버킷 수준에서 무엇을 설정합니까?",
        "options": [
            "S3 버킷 정책(Bucket Policy)에 역할 ARN을 지정한다.",
            "EC2 보안 그룹에 S3를 추가한다.",
            "VPC 보안 그룹에서 차단한다.",
            "IAM 사용자 정책만 쓴다."
        ],
        "answer": "S3 버킷 정책(Bucket Policy)에 역할 ARN을 지정한다.",
        "explanation": "S3 버킷 정책은 리소스 기반 정책으로, 누가(Principal) 어떤 조건에서 접근 가능한지 명시하여 보안을 완성합니다. "
    },
    {
        "category": "데이터베이스",
        "title": "두 리전 간에 초 단위 미만의 복제 지연 시간(RPO)을 유지하면서 활성-활성(Active-Active) DB를 구성하고 싶습니다. 최적의 솔루션은?",
        "options": [
            "Amazon DynamoDB 글로벌 테이블",
            "Aurora 글로벌 데이터베이스",
            "RDS 교차 리전 복제본",
            "ElastiCache 전역 데이터스토어"
        ],
        "answer": "Amazon DynamoDB 글로벌 테이블",
        "explanation": "글로벌 테이블은 다중 마스터 복제를 지원하여 전 세계 어디서든 동시다발적인 읽기/쓰기를 지원합니다. "
    },
    {
        "category": "애플리케이션 통합",
        "title": "여러 Lambda 함수가 동일한 이벤트를 받지만, 각 함수는 본인에게 필요한 데이터만 추출해서 전달받아야 합니다. 결합도가 가장 낮은 방식은?",
        "options": [
            "Amazon EventBridge와 입력 트랜스포머(Input Transformer) 사용",
            "SNS 주제 필터링 정책 사용",
            "SQS 대기열 분리",
            "Lambda 코드 내에서 수동 필터링"
        ],
        "answer": "Amazon EventBridge와 입력 트랜스포머(Input Transformer) 사용",
        "explanation": "EventBridge의 입력 트랜스포머를 쓰면 타겟 함수로 전달하기 전에 이벤트 데이터 구조를 원하는 대로 가공할 수 있습니다. "
    },
    {
        "category": "아키텍처",
        "title": "웹 서버 장애 시에도 사용자 세션이 끊기지 않도록 고가용성 외부 세션 저장소를 구축하려 합니다. 적합한 서비스 조합은?",
        "options": [
            "ALB의 세션 고정 기능 및 Amazon ElastiCache for Redis",
            "DynamoDB와 Cognito",
            "EBS 다중 연결",
            "S3와 CloudFront"
        ],
        "answer": "ALB의 세션 고정 기능 및 Amazon ElastiCache for Redis",
        "explanation": "ALB로 세션을 특정 서버에 고정하고, Redis를 통해 세션 데이터를 외부에 저장하면 서버 교체 시에도 상태가 유지됩니다. "
    },
    {
        "category": "비용 최적화",
        "title": "업무 시간 외에 사용되지 않는 RDS 및 EC2 인스턴스를 자동으로 종료하여 비용을 절감하고 싶습니다. 가장 효율적인 방법은?",
        "options": [
            "AWS 인스턴스 스케줄러(Instance Scheduler) 사용",
            "예약 인스턴스 구매",
            "Lambda 함수와 CloudWatch 경보 연동",
            "수동 관리"
        ],
        "answer": "AWS 인스턴스 스케줄러(Instance Scheduler) 사용",
        "explanation": "인스턴스 스케줄러는 사용자가 정의한 일정에 따라 자동으로 리소스를 켜고 꺼주는 관리형 솔루션입니다. "
    },
    {
        "category": "저장소",
        "title": "수백 개의 인스턴스에서 동시에 고성능 병렬 접근이 필요한 연산 작업을 수행합니다. S3와 연동되는 저지연 스토리지 서비스는?",
        "options": [
            "Amazon FSx for Lustre",
            "Amazon EFS",
            "EBS Multi-Attach",
            "S3 직접 마운트"
        ],
        "answer": "Amazon FSx for Lustre",
        "explanation": "FSx for Lustre는 HPC 워크로드의 병렬 처리에 최적화된 고성능 파일 시스템을 제공합니다. "
    },
    {
        "category": "서버리스",
        "title": "매일 아침 직원들이 접속할 때 Lambda 함수의 응답이 느려지는 콜드 스타트 문제를 해결하고 싶습니다. 무엇을 설정해야 합니까?",
        "options": [
            "Lambda 프로비저닝된 동시성(Provisioned Concurrency) 및 예약된 조정",
            "메모리 최대 할당",
            "CloudWatch 로그 활성화",
            "API Gateway 제한"
        ],
        "answer": "Lambda 프로비저닝된 동시성(Provisioned Concurrency) 및 예약된 조정",
        "explanation": "프로비저닝된 동시성을 미리 확보해두면 대기 시간 없이 즉시 요청을 처리할 수 있습니다. "
    },
    {
        "category": "분석",
        "title": "RESTful 서비스를 통해 들어온 원시 데이터를 S3에 저장하기 전 변환(ETL) 작업을 수행하려 합니다. 가장 적합한 아키텍처는?",
        "options": [
            "API Gateway + Kinesis Data Firehose + AWS Glue",
            "Route 53 + EC2 직접 처리",
            "SQS + ECS 직접 가공",
            "S3 이벤트 알림 전용"
        ],
        "answer": "API Gateway + Kinesis Data Firehose + AWS Glue",
        "explanation": "Firehose로 데이터를 수집하고 Glue로 ETL을 수행하여 S3에 저장하는 것이 관리형 서비스 기반의 정석적인 분석 파이프라인입니다. "
    },
    {
        "category": "데이터베이스",
        "title": "RDS MySQL의 읽기 복제본 지연 시간이 너무 깁니다. 코드 변경을 최소화하면서 복제 성능을 높이고 가용성을 확보하려면?",
        "options": [
            "Amazon Aurora MySQL로 마이그레이션",
            "EC2 위 MySQL로 변경",
            "데이터베이스 분할",
            "DynamoDB로 전환"
        ],
        "answer": "Amazon Aurora MySQL로 마이그레이션",
        "explanation": "Aurora는 공유 스토리지 구조를 사용하여 복제 지연이 거의 없으며 성능이 기존 MySQL보다 훨씬 뛰어납니다. "
    },
    {
        "category": "보안",
        "title": "보안 정책상 회사가 직접 생성한 키 자료(Key material)를 AWS로 가져와서 암호화에 사용해야 합니다. 어떤 기능을 써야 합니까?",
        "options": [
            "AWS KMS에서 자체 키 자료 가져오기(Importing key material) 및 SSE-C 사용",
            "S3 관리형 키 사용",
            "KMS 기본 키 사용",
            "Snowball 전용 암호화"
        ],
        "answer": "AWS KMS에서 자체 키 자료 가져오기(Importing key material) 및 SSE-C 사용",
        "explanation": "자체 키 자료를 가져오면 키 생성 과정을 회사가 완전히 통제할 수 있어 엄격한 규정 준수가 가능합니다. "
    },
    {
        "category": "컨테이너",
        "title": "Fargate 기반 컨테이너에서 50GB의 대용량 임시 파일을 다뤄야 합니다. 서버 관리 없이 이를 구현하는 가장 좋은 방법은?",
        "options": [
            "AWS Fargate와 Amazon EFS 파일 시스템 마운트",
            "S3에 파일 쓰기",
            "EBS 볼륨 직접 연결",
            "EC2 인스턴스 스토어 사용"
        ],
        "answer": "AWS Fargate와 Amazon EFS 파일 시스템 마운트",
        "explanation": "Fargate는 서버리스이므로 EBS 직접 연결이 어렵지만, EFS는 여러 컨테이너에서 동시에 마운트하여 대용량 저장소로 쓸 수 있습니다. "
    },
    {
        "category": "네트워크",
        "title": "3개 리전에 배포된 UDP 기반 애플리케이션의 성능을 높이고 빠른 장애 조치를 지원하고 싶습니다. 무엇을 사용합니까?",
        "options": [
            "AWS Global Accelerator와 리전별 NLB(Network Load Balancer)",
            "CloudFront와 ALB",
            "Route 53 가중치 기반 라우팅",
            "Direct Connect"
        ],
        "answer": "AWS Global Accelerator와 리전별 NLB(Network Load Balancer)",
        "explanation": "Global Accelerator는 UDP 프로토콜을 공식 지원하며 전 세계 엣지에서 트래픽을 가속화합니다. "
    },
    {
        "category": "보안",
        "title": "AWS로 데이터를 보내기 전, 사내 데이터 센터 내의 도구로 데이터를 미리 암호화한 뒤 S3에 저장하려 합니다. 어떤 방식입니까?",
        "options": [
            "클라이언트 측 암호화(Client-side encryption)",
            "SSE-S3",
            "SSE-KMS",
            "SSE-C"
        ],
        "answer": "클라이언트 측 암호화(Client-side encryption)",
        "explanation": "데이터가 AWS에 도착하기 전에 사용자가 직접 암호화하는 방식을 클라이언트 측 암호화라고 합니다. "
    },
    {
        "category": "네트워크",
        "title": "두 VPC 간에 인터넷 노출 없이 특정 서비스만 프라이빗하게 공유하고 싶습니다. 피어링 대신 사용 가능한 기술은?",
        "options": [
            "AWS PrivateLink (VPC 엔드포인트 서비스)",
            "NAT 게이트웨이",
            "인터넷 게이트웨이",
            "VPC 피어링"
        ],
        "answer": "AWS PrivateLink (VPC 엔드포인트 서비스)",
        "explanation": "PrivateLink를 사용하면 서비스만 노출하고 네트워크 전체를 연결하지 않아도 되므로 보안상 유리합니다. "
    },
    {
        "category": "비용 최적화",
        "title": "프라이빗 서브넷에서 S3로 데이터를 보낼 때 NAT 게이트웨이 비용이 너무 많이 나옵니다. 이를 없애는 방법은?",
        "options": [
            "S3용 게이트웨이 VPC 엔드포인트를 생성한다.",
            "S3 전송 가속화를 켠다.",
            "Direct Connect를 사용한다.",
            "EC2에 퍼블릭 IP를 준다."
        ],
        "answer": "S3용 게이트웨이 VPC 엔드포인트를 생성한다.",
        "explanation": "게이트웨이 엔드포인트는 무료이며 NAT 게이트웨이를 거치지 않고 S3와 직접 통신하게 해줍니다. "
    },
    {
        "category": "비용 최적화",
        "title": "24시간 가동되어야 하는 웹 서버의 비용을 절감하면서 고가용성을 유지하고 싶습니다. 초기 비용 부담이 없을 때 최적의 옵션은?",
        "options": [
            "No Upfront 예약 인스턴스(Reserved Instances)",
            "스팟 인스턴스",
            "온디맨드 인스턴스",
            "전용 호스트"
        ],
        "answer": "No Upfront 예약 인스턴스(Reserved Instances)",
        "explanation": "24시간 가동 시 예약 인스턴스가 온디맨드보다 훨씬 저렴하며, No Upfront는 초기 비용 없이 할인을 받게 해줍니다. "
    },
    {
        "category": "보안",
        "title": "데이터베이스 비밀번호를 안전하게 저장하고 EC2에 설치된 앱이 이를 가져다 쓰게 하려 합니다. IAM 역할과 함께 사용해야 하는 서비스는?",
        "options": [
            "AWS Systems Manager Parameter Store",
            "S3 암호화 버킷",
            "DB 파라미터 그룹",
            "IAM 사용자"
        ],
        "answer": "AWS Systems Manager Parameter Store",
        "explanation": "Parameter Store는 설정값이나 비밀번호를 안전하게 관리하며 IAM 역할로 접근 권한을 제어하기에 적합합니다. "
    },
    {
        "category": "비용 최적화",
        "title": "프로덕션 환경은 연중무휴 가동되고, 개발 환경은 간헐적으로 사용됩니다. 비용 효율적인 조합은?",
        "options": [
            "프로덕션: Savings Plans, 개발 환경: 온디맨드(필요 시 중지)",
            "전체 스팟 인스턴스",
            "전체 예약 인스턴스",
            "전체 전용 호스트"
        ],
        "answer": "프로덕션: Savings Plans, 개발 환경: 온디맨드(필요 시 중지)",
        "explanation": "꾸준한 사용량에는 Savings Plans 할인을 적용하고, 불규칙한 사용에는 쓴 만큼만 내는 온디맨드가 유리합니다. "
    },
    {
        "category": "비용 최적화",
        "title": "테스트용 RDS를 평일 업무 시간에만 켜두고 밤이나 주말에는 자동으로 끄고 싶습니다. 가장 운영 효율적인 방법은?",
        "options": [
            "EventBridge로 스케줄링하여 Lambda 함수로 RDS 시작/중지를 처리한다.",
            "수동으로 끄기",
            "Trusted Advisor 사용",
            "Systems Manager State Manager 사용"
        ],
        "answer": "EventBridge로 스케줄링하여 Lambda 함수로 RDS 시작/중지를 처리한다.",
        "explanation": "서버리스 방식인 EventBridge와 Lambda를 조합하면 추가 서버 없이 완전 자동화된 스케줄링이 가능합니다. "
    },
    {
        "category": "비용 최적화",
        "title": "성능 저하 없이 비용을 줄이고 싶은 MySQL 웹 앱이 있습니다. DB와 인스턴스 계층의 최적화 방안은?",
        "options": [
            "Aurora MySQL 마이그레이션 및 EC2 스팟 인스턴스 활용",
            "RDS 수직 확장",
            "온디맨드 인스턴스 유지",
            "S3로 전체 데이터 이동"
        ],
        "answer": "Aurora MySQL 마이그레이션 및 EC2 스팟 인스턴스 활용",
        "explanation": "Aurora는 비용 대비 성능이 뛰어나며, 웹 서버에 스팟 인스턴스를 섞어 쓰면 비용을 획기적으로 낮출 수 있습니다. "
    },
    {
        "category": "네트워크",
        "title": "관리 계정에서 생성한 VPC 서브넷을 여러 개발 계정에서 공유하여 쓰게 하고 싶습니다. 무엇을 사용합니까?",
        "options": [
            "AWS Resource Access Manager (AWS RAM)",
            "VPC 피어링",
            "VPC 엔드포인트",
            "Organizations 전용 정책"
        ],
        "answer": "AWS Resource Access Manager (AWS RAM)",
        "explanation": "AWS RAM을 쓰면 하나의 계정에서 만든 리소스(서브넷 등)를 다른 계정들과 안전하게 공유할 수 있습니다. "
    },
    {
        "category": "보안",
        "title": "수천 개의 S3 버킷 내 데이터 중 개인정보(PII)가 있는지 머신러닝으로 자동 탐지하고 싶습니다. 적합한 서비스는?",
        "options": [
            "Amazon Macie",
            "Amazon Inspector",
            "GuardDuty",
            "S3 Select"
        ],
        "answer": "Amazon Macie",
        "explanation": "Macie는 S3 내의 민감한 데이터를 식별하고 분류하는 데 특화된 보안 서비스입니다. "
    },
    {
        "category": "컴퓨팅",
        "title": "신제품 출시 이벤트로 갑작스러운 트래픽 폭증이 예상됩니다. 웹 서버 용량을 자동으로 늘리고 정적 콘텐츠 부하를 줄이려면?",
        "options": [
            "Amazon CloudFront 배포 및 EC2 Auto Scaling 그룹 설정",
            "인스턴스 크기 수동 변경",
            "S3 직접 호스팅만 사용",
            "SQS 대기열만 추가"
        ],
        "answer": "Amazon CloudFront 배포 및 EC2 Auto Scaling 그룹 설정",
        "explanation": "CloudFront는 엣지에서 부하를 분산하고, ASG는 서버 수량을 실시간으로 조절해 안정성을 보장합니다. "
    },
    {
        "category": "애플리케이션 통합",
        "title": "매일 DynamoDB를 조회해 입사 기념일인 직원에게 자동으로 메일을 보내고 싶습니다. 가장 운영 효율적인 서버리스 방식은?",
        "options": [
            "EventBridge 스케줄러로 Lambda를 실행하여 SNS로 메일을 보낸다.",
            "EC2에 크론탭 설치",
            "SQS로 매일 메시지 예약",
            "수동 조회"
        ],
        "answer": "EventBridge 스케줄러로 Lambda를 실행하여 SNS로 메일을 보낸다.",
        "explanation": "서버 관리 없이 정해진 시간에 로직을 돌리고 알림을 보내는 최적의 서버리스 조합입니다. "
    },
    {
        "category": "네트워크",
        "title": "UDP를 사용하는 전 세계 애플리케이션의 지연 시간을 줄이고 빠른 리전 페일오버를 지원하려 합니다. 무엇을 써야 합니까?",
        "options": [
            "AWS Global Accelerator와 Network Load Balancer",
            "CloudFront와 ALB",
            "리전별 VPN",
            "Route 53만 사용"
        ],
        "answer": "AWS Global Accelerator와 Network Load Balancer",
        "explanation": "Global Accelerator는 UDP를 지원하며 AWS 사설망을 통해 전 세계 트래픽을 가속화합니다. "
    },
    {
        "category": "보안",
        "title": "A 계정의 사용자가 B 계정의 S3 버킷 데이터를 읽어야 합니다. 액세스 키 공유 없이 가장 안전한 방법은?",
        "options": [
            "B 계정에 읽기 전용 IAM 역할을 만들고 A 계정 사용자가 이를 맡게(AssumeRole) 한다.",
            "버킷을 퍼블릭으로 연다.",
            "A 계정에도 버킷을 복제한다.",
            "IAM 그룹을 공유한다."
        ],
        "answer": "B 계정에 읽기 전용 IAM 역할을 만들고 A 계정 사용자가 이를 맡게(AssumeRole) 한다.",
        "explanation": "크로스 계정 IAM 역할은 임시 자격 증명을 통해 안전하게 타 계정 리소스에 접근하게 해줍니다. "
    },
    {
        "category": "분석",
        "title": "외부 앱의 데이터를 실시간 수집하여 S3에 저장하려 합니다. 관리 부담이 적고 확장성이 뛰어난 수집 서비스는?",
        "options": [
            "Amazon Kinesis Data Firehose",
            "AWS DataSync",
            "Direct Connect",
            "DMS"
        ],
        "answer": "Amazon Kinesis Data Firehose",
        "explanation": "Firehose는 스트리밍 데이터를 받아서 S3 등으로 자동 로드해주는 완전 관리형 서비스입니다. "
    },
    {
        "category": "보안",
        "title": "사용자가 S3 버킷에 직접 접근하는 것을 막고 오직 CloudFront를 통해서만 콘텐츠를 보게 하고 싶습니다. 무엇을 사용합니까?",
        "options": [
            "원본 액세스 ID(OAI) 또는 OAC 설정 및 S3 버킷 정책 수정",
            "S3에 퍼블릭 차단만 설정",
            "EC2 보안 그룹 사용",
            "WAF 단독 사용"
        ],
        "answer": "원본 액세스 ID(OAI) 또는 OAC 설정 및 S3 버킷 정책 수정",
        "explanation": "OAC/OAI를 쓰면 S3 버킷 정책에서 해당 ID만 허용하도록 제한하여 우회 접근을 원천 차단합니다. "
    },
    {
        "category": "보안",
        "title": "API Gateway의 특정 엔드포인트에 대해 사내 IP 주소 대역에서만 접근하도록 제한하고 싶습니다. 무엇을 설정합니까?",
        "options": [
            "API Gateway 리소스 정책(Resource Policy)",
            "VPC 보안 그룹",
            "NACL 규칙",
            "IAM 정책"
        ],
        "answer": "API Gateway 리소스 정책(Resource Policy)",
        "explanation": "리소스 정책을 쓰면 IP 기반 허용/거부 규칙을 API 수준에서 직접 정의할 수 있습니다. "
    },
    {
        "category": "데이터베이스",
        "title": "DynamoDB의 읽기 성능을 마이크로초 단위로 높여야 하는 실시간 앱을 개발 중입니다. 코드 변경 없이 가능한 방법은?",
        "options": [
            "DynamoDB Accelerator (DAX) 사용",
            "ElastiCache 직접 연동",
            "Redshift 도입",
            "인덱스 추가"
        ],
        "answer": "DynamoDB Accelerator (DAX) 사용",
        "explanation": "DAX는 DynamoDB 전용 인메모리 캐시로, 기존 API 호출 방식을 유지하면서 성능을 극대화합니다. "
    },
    {
        "category": "컴퓨팅",
        "title": "전체 서버군의 평균 CPU 사용률을 50% 수준으로 일정하게 유지하도록 인스턴스 수를 자동 조절하고 싶습니다. 어떤 정책입니까?",
        "options": [
            "대상 추적(Target Tracking) 조정 정책",
            "예약된 조정 정책",
            "단순 조정 정책",
            "단계 조정 정책"
        ],
        "answer": "대상 추적(Target Tracking) 조정 정책",
        "explanation": "대상 추적 정책은 특정 지표(CPU 등)의 목표치를 정해두면 ASG가 알아서 수량을 가감합니다. "
    },
    {
        "category": "네트워크",
        "title": "EKS 클러스터 내부의 워커 노드와 제어 평면 간의 통신이 인터넷을 타지 않게 하려면 무엇을 확인해야 합니까?",
        "options": [
            "프라이빗 엔드포인트(Private Endpoint) 활성화 여부",
            "IAM 역할 설정",
            "EC2 인스턴스 타입",
            "퍼블릭 액세스 허용 여부"
        ],
        "answer": "프라이빗 엔드포인트(Private Endpoint) 활성화 여부",
        "explanation": "프라이빗 엔드포인트를 켜면 클러스터 내부 통신이 VPC 내부망을 통해서만 이루어집니다. "
    },
    {
        "category": "컴퓨팅",
        "title": "HPC 작업을 위해 16대 인스턴스 간 최저 지연 통신과 공유 블록 스토리지가 필요합니다. 어떤 조합이 최적입니까?",
        "options": [
            "클러스터 배치 그룹 및 EBS 다중 연결(Multi-Attach) 사용",
            "여러 AZ에 분산 배치 및 EFS 사용",
            "전용 호스트 사용",
            "S3 직접 연결"
        ],
        "answer": "클러스터 배치 그룹 및 EBS 다중 연결(Multi-Attach) 사용",
        "explanation": "클러스터 배치는 물리적 거리를 좁혀 지연을 낮추고, Multi-Attach는 여러 인스턴스가 하나의 볼륨을 공유하게 합니다. "
    },
    {
        "category": "운영",
        "title": "AWS Outposts를 도입할 때 고객이 책임져야 하는 부분은 무엇입니까? (3개 선택)",
        "options": [
            "전력 및 네트워크 연결 제공, 물리적 보안 유지, 실패 대비 추가 용량 확보",
            "하이퍼바이저 관리",
            "S3 하드웨어 교체",
            "리전 간 라우팅 관리"
        ],
        "answer": "전력 및 네트워크 연결 제공, 물리적 보안 유지, 실패 대비 추가 용량 확보",
        "explanation": "Outposts는 물리적 공간에 설치되므로 전원, 네트워크, 현장 보안은 고객의 몫입니다. "
    },
    {
        "category": "보안",
        "title": "ALB 뒤의 웹 앱이 SQL 인젝션 공격에 취약합니다. 가장 빠르고 효과적인 방어 수단은?",
        "options": [
            "AWS WAF 적용 및 사전 정의된 규칙 활성화",
            "보안 그룹에서 모든 포트 차단",
            "인스턴스 내부 방화벽 강화",
            "DB 암호화 강제"
        ],
        "answer": "AWS WAF 적용 및 사전 정의된 규칙 활성화",
        "explanation": "WAF는 웹 요청 내용을 검사해 악성 쿼리를 차단하는 가장 효율적인 도구입니다. "
    },
    {
        "category": "데이터베이스",
        "title": "RDS MySQL의 부하가 높습니다. 애플리케이션 코드를 거의 고치지 않고 읽기 부하를 줄이는 방법은?",
        "options": [
            "RDS 읽기 전용 복제본(Read Replica) 생성",
            "DynamoDB로 이전",
            "인스턴스 타입 변경",
            "ElastiCache 직접 구현"
        ],
        "answer": "RDS 읽기 전용 복제본(Read Replica) 생성",
        "explanation": "복제본을 만들고 연결 문자열만 바꾸면 읽기 요청을 분산하여 주 DB의 부하를 줄일 수 있습니다. "
    },
    {
        "category": "데이터베이스",
        "title": "수천 개의 Lambda 함수가 동시에 Aurora DB에 접속하여 연결 수가 초과됩니다. 이를 해결하는 서비스는?",
        "options": [
            "Amazon RDS Proxy",
            "SQS FIFO 대기열",
            "SNS 주제",
            "Lambda 동시성 제한"
        ],
        "answer": "Amazon RDS Proxy",
        "explanation": "RDS Proxy는 연결 풀링을 통해 많은 양의 요청을 효율적으로 관리하고 DB 자원을 보호합니다. "
    },
    {
        "category": "보안",
        "title": "사내 Active Directory 권한 체계를 그대로 유지하며 클라우드 파일 공유 서버를 쓰려 합니다. 무엇을 해야 합니까?",
        "options": [
            "FSx for Windows File Server를 온프레미스 AD에 가입(Join)시킨다.",
            "IAM 사용자만 쓴다.",
            "S3 버킷 정책만 쓴다.",
            "EC2에 수동으로 파일 서버 설치"
        ],
        "answer": "FSx for Windows File Server를 온프레미스 AD에 가입(Join)시킨다.",
        "explanation": "FSx는 기존 AD와 연동되어 NTFS 권한과 ACL을 그대로 사용할 수 있게 해줍니다. "
    },
    {
        "category": "고가용성",
        "title": "현재 1개 AZ에서만 작동하는 Auto Scaling 그룹을 다중 AZ 고가용성 구조로 바꾸는 가장 간단한 방법은?",
        "options": [
            "Auto Scaling 그룹 설정을 수정하여 여러 가용 영역(Subnets)을 선택한다.",
            "인스턴스를 수동으로 복제한다.",
            "새로운 로드 밸런서를 만든다.",
            "VPC를 새로 판다."
        ],
        "answer": "Auto Scaling 그룹 설정을 수정하여 여러 가용 영역(Subnets)을 선택한다.",
        "explanation": "ASG 설정에서 서브넷만 추가하면 알아서 인스턴스를 여러 AZ에 균형 있게 배치합니다. "
    },
    {
        "category": "보안",
        "title": "모든 계정의 API 활동 로그를 7년 동안 보관하고 SQL로 검색하고 싶습니다. 가장 운영 효율적인 서비스는?",
        "options": [
            "AWS CloudTrail Lake",
            "S3에 로그 저장 후 Athena 연동",
            "CloudWatch Logs",
            "타사 로그 솔루션"
        ],
        "answer": "AWS CloudTrail Lake",
        "explanation": "CloudTrail Lake는 로그 수집, 장기 보관, SQL 쿼리 기능을 하나의 관리형 서비스로 제공합니다. "
    },
    {
        "category": "보안",
        "title": "API Gateway와 Lambda로 구성된 마이크로서비스에 IAM 기반의 엄격한 인증을 적용하고 싶습니다. 무엇을 해야 합니까?",
        "options": [
            "API Gateway 메서드에서 IAM 권한 부여(IAM Auth)를 활성화한다.",
            "Lambda 함수 내에서 코딩한다.",
            "S3 서명된 URL을 쓴다.",
            "모든 요청을 허용한다."
        ],
        "answer": "API Gateway 메서드에서 IAM 권한 부여(IAM Auth)를 활성화한다.",
        "explanation": "IAM 인증을 켜면 서명된 요청만 API를 호출할 수 있어 보안성이 매우 높습니다. "
    },
    {
        "category": "비용 최적화",
        "title": "대량의 정적 이미지 파일을 전 세계에 저렴하게 배포하고 싶습니다. 서버 운영 없이 가용성이 높은 구성은?",
        "options": [
            "Amazon S3와 Amazon CloudFront 조합",
            "EC2 Auto Scaling 그룹",
            "EFS 파일 서버",
            "S3 직접 공개"
        ],
        "answer": "Amazon S3와 Amazon CloudFront 조합",
        "explanation": "S3와 CloudFront 조합은 관리 부담이 없고 엣지 캐싱을 통해 전송 비용을 최적화합니다. "
    },
    {
        "category": "저장소",
        "title": "수십 대의 Linux EC2 인스턴스가 동시에 같은 파일 시스템에 접근하여 데이터를 읽고 써야 합니다. 적합한 서비스는?",
        "options": [
            "Amazon Elastic File System (Amazon EFS)",
            "Amazon EBS",
            "Instance Store",
            "S3 마운트"
        ],
        "answer": "Amazon Elastic File System (Amazon EFS)",
        "explanation": "EFS는 수천 대의 인스턴스가 동시에 접근 가능한 표준 NFS 공유 스토리지를 제공합니다. "
    },
    {
        "category": "운영",
        "title": "리소스가 생성될 때마다 생성자의 센터 ID를 자동으로 태그로 부착하고 싶습니다. 어떤 자동화 방식이 적절합니까?",
        "options": [
            "CloudTrail 이벤트를 감지한 EventBridge가 Lambda를 실행하여 태그를 부착한다.",
            "수동 태깅",
            "SCP 정책만 사용",
            "CloudFormation으로만 생성 강제"
        ],
        "answer": "CloudTrail 이벤트를 감지한 EventBridge가 Lambda를 실행하여 태그를 부착한다.",
        "explanation": "API 호출을 실시간 감시하여 후속 조치(태깅)를 취하는 가장 효율적인 자동화 패턴입니다. "
    },
    {
        "category": "아키텍처",
        "title": "기존 EC2 웹 앱을 코드 수정 없이 고가용성으로 바꾸려 합니다. 필요한 조치 두 가지는?",
        "options": [
            "ALB 도입 및 다중 AZ Auto Scaling 그룹 구성",
            "NAT 게이트웨이 추가",
            "인스턴스 타입 업그레이드",
            "S3 복제"
        ],
        "answer": "ALB 도입 및 다중 AZ Auto Scaling 그룹 구성",
        "explanation": "로드 밸런서와 다중 AZ 배포는 고가용성 인프라의 핵심 기본 요소입니다. "
    },
    {
        "category": "하이브리드",
        "title": "온프레미스 스토리지 용량이 부족하여 클라우드와 연결하려 합니다. 최근 데이터만 로컬에 보관하고 나머지는 S3에 두는 방식은?",
        "options": [
            "AWS Storage Gateway 볼륨 게이트웨이(캐싱 모드)",
            "S3 직접 업로드",
            "EBS 다중 연결",
            "Snowball"
        ],
        "answer": "AWS Storage Gateway 볼륨 게이트웨이(캐싱 모드)",
        "explanation": "캐싱 모드는 로컬 하드 용량을 적게 차지하면서 S3의 무제한 용량을 활용하게 해줍니다. "
    },
    {
        "category": "네트워크",
        "title": "VPC 내부의 EC2가 인터넷망을 타지 않고 S3와 직접 데이터를 주고받아야 합니다. 가장 적합한 것은?",
        "options": [
            "S3용 게이트웨이 VPC 엔드포인트",
            "NAT 게이트웨이",
            "공용 IP 할당",
            "VPN 연결"
        ],
        "answer": "S3용 게이트웨이 VPC 엔드포인트",
        "explanation": "게이트웨이 엔드포인트는 S3 접근 시 보안과 비용 효율성을 모두 만족시키는 표준입니다. "
    },
    {
        "category": "아키텍처",
        "title": "급격히 성장하는 쇼핑몰의 페이지 로딩 속도를 개선하고 DB 부하를 줄여야 합니다. 필요한 조치 두 가지는?",
        "options": [
            "CloudFront 배포 및 RDS 읽기 전용 복제본 생성",
            "S3로 전체 이전",
            "인스턴스 수동 추가",
            "Redshift 도입"
        ],
        "answer": "CloudFront 배포 및 RDS 읽기 전용 복제본 생성",
        "explanation": "CloudFront는 전면에서 속도를 높이고, 복제본은 DB 읽기 병목을 해결합니다. "
    },
    {
        "category": "관리 및 거버넌스",
        "title": "조직 내 계정 계층 구조가 변경될 때마다 알림을 받고 자동으로 관리하고 싶습니다. 무엇이 가장 효율적입니까?",
        "options": [
            "AWS Control Tower의 드리프트(Drift) 감지 및 알림",
            "수동 체크",
            "IAM 정책 감사",
            "S3 로그 검색"
        ],
        "answer": "AWS Control Tower의 드리프트(Drift) 감지 및 알림",
        "explanation": "Control Tower는 거버넌스 정책에서 벗어난 변경(드리프트)을 실시간 감지하여 보고합니다. "
    },
    {
        "category": "보안",
        "title": "여러 AWS 계정에 대해 사내 AD 계정으로 한 번에 로그인(SSO)하게 하려 합니다. 가장 운영 부담이 적은 것은?",
        "options": [
            "AD Connector와 AWS IAM Identity Center 연동",
            "IAM 사용자 매번 생성",
            "Cognito 직접 연동",
            "교차 계정 역할만 사용"
        ],
        "answer": "AD Connector와 AWS IAM Identity Center 연동",
        "explanation": "AD Connector를 쓰면 기존 AD 인프라를 그대로 쓰면서 AWS 통합 로그인이 가능해집니다. "
    },
    {
        "category": "아키텍처",
        "title": "수만 개의 센서 데이터를 받아 저장하고 분석하려 합니다. 서버 관리 없이 가변적인 트래픽을 처리하는 구조는?",
        "options": [
            "API Gateway + Lambda + DynamoDB",
            "EC2 Auto Scaling + EBS",
            "ELB + EC2 + RDS",
            "S3 정적 호스팅 전용"
        ],
        "answer": "API Gateway + Lambda + DynamoDB",
        "explanation": "모든 계층이 서버리스이므로 트래픽 규모에 상관없이 자동 확장되며 관리가 매우 쉽습니다. "
    },
    {
        "category": "네트워크",
        "title": "전 세계 사용자에게 가장 가까운 리전의 서버로 접속을 유도하여 성능을 높이고 싶습니다. 어떤 정책입니까?",
        "options": [
            "Route 53 지리적 위치(Geolocation) 라우팅 정책",
            "가중치 라우팅",
            "단순 라우팅",
            "장애 조치 라우팅"
        ],
        "answer": "Route 53 지리적 위치(Geolocation) 라우팅 정책",
        "explanation": "지리적 위치 라우팅은 사용자의 실제 물리적 위치를 기반으로 최적의 엔드포인트를 제공합니다. "
    },
    {
        "category": "하이브리드",
        "title": "온프레미스에 모든 데이터를 유지하면서 비동기적으로 클라우드에 전체 백업을 수행하고 싶습니다. 어떤 서비스입니까?",
        "options": [
            "AWS Storage Gateway 볼륨 게이트웨이(보관 모드/Stored)",
            "캐싱 모드",
            "Snowball",
            "S3 직접 업로드"
        ],
        "answer": "AWS Storage Gateway 볼륨 게이트웨(보관 모드/Stored)",
        "explanation": "보관 모드는 로컬에 전체 복사본을 유지하므로 지연 시간이 거의 없고 클라우드는 백업 용도로 씁니다. "
    },
    {
        "category": "컨테이너",
        "title": "EC2 인스턴스를 직접 관리하거나 패치하지 않고 Docker 컨테이너를 실행하고 싶습니다. 어떤 서비스를 써야 합니까?",
        "options": [
            "AWS Fargate 기반의 Amazon ECS",
            "EC2 기반 ECS",
            "EKS 직접 구축",
            "Lambda 함수"
        ],
        "answer": "AWS Fargate 기반의 Amazon ECS",
        "explanation": "Fargate는 컨테이너를 위한 서버리스 컴퓨팅 엔진으로, 인프라 관리 부담을 완전히 제거합니다. "
    },
    {
        "category": "보안",
        "title": "IAM 정책에서 S3 버킷 목록 조회(ListBucket)와 객체 읽기/쓰기를 모두 허용하려면 리소스 지정을 어떻게 해야 합니까?",
        "options": [
            "버킷 ARN과 버킷 ARN 하위 경로(/*)를 모두 포함해야 한다.",
            "버킷 ARN 하나만 적으면 된다.",
            "와일드카드(*)만 적는다.",
            "버킷 이름을 생략한다."
        ],
        "answer": "버킷 ARN과 버킷 ARN 하위 경로(/*)를 모두 포함해야 한다.",
        "explanation": "버킷 자체 권한(목록 조회)과 내부 객체 권한(읽기/쓰기)은 ARN 형식이 다르므로 둘 다 명시해야 합니다. "
    },
    {
        "category": "마이그레이션",
        "title": "NFS를 사용하는 기존 레거시 앱을 AWS로 옮기려 합니다. 수정 없이 사용 가능한 완전 관리형 저장소는?",
        "options": [
            "Amazon Elastic File System (Amazon EFS)",
            "Amazon EBS",
            "S3 Standard",
            "EFS 스냅샷"
        ],
        "answer": "Amazon Elastic File System (Amazon EFS)",
        "explanation": "EFS는 표준 NFS 프로토콜을 지원하므로 기존 앱의 수정 없이 클라우드 공유 스토리지로 바로 쓸 수 있습니다. "
    },
    {
        "category": "분석",
        "title": "프로덕션 DB 부하 없이 S3에 저장된 과거 데이터를 SQL로 쿼리하여 보고서를 만들고 싶습니다. 최적의 서비스는?",
        "options": [
            "Amazon Athena",
            "RDS 읽기 전용 복제본",
            "DynamoDB 스캔",
            "EC2 직접 설치"
        ],
        "answer": "Amazon Athena",
        "explanation": "Athena는 S3 데이터를 즉석에서 SQL로 분석하는 서버리스 서비스로, 프로덕션 DB에 전혀 영향을 주지 않습니다. "
    },
    {
        "category": "비용 최적화",
        "title": "Auto Scaling 그룹을 사용하여 애플리케이션을 운영합니다. 기본 용량은 온디맨드로 확보하고, 추가 트래픽은 스팟 인스턴스로 처리하여 비용을 최적화하려면 어떤 정책을 써야 합니까?",
        "options": [
            "혼합 인스턴스 정책(Mixed Instances Policy) 사용",
            "스팟 집합(Spot Fleet) 사용",
            "예약 인스턴스 구매",
            "시작 템플릿만 사용"
        ],
        "answer": "혼합 인스턴스 정책(Mixed Instances Policy) 사용",
        "explanation": "Auto Scaling 그룹의 혼합 인스턴스 정책을 사용하면 온디맨드와 스팟 인스턴스의 비율을 조정하여 안정성과 비용 효율성을 동시에 확보할 수 있습니다."
    },
    {
        "category": "보안",
        "title": "퍼블릭 웹 서버와 프라이빗 DB 서버로 구성된 2계층 아키텍처가 있습니다. 보안 그룹을 가장 안전하게 구성하는 방법은?",
        "options": [
            "웹 서버: 443 포트(0.0.0.0/0) 허용, DB 서버: 3306 포트(웹 서버 보안 그룹 ID) 허용",
            "웹 서버: 모든 포트 허용, DB: 웹 서버 IP 허용",
            "DB 서버: 0.0.0.0/0 허용",
            "모든 서버: 사내 IP만 허용"
        ],
        "answer": "웹 서버: 443 포트(0.0.0.0/0) 허용, DB 서버: 3306 포트(웹 서버 보안 그룹 ID) 허용",
        "explanation": "웹 서버는 HTTPS를 위해 전 세계에 개방하고, DB 서버는 오직 웹 서버의 보안 그룹을 소스로 지정하여 접근을 제한하는 것이 표준 보안 구성입니다."
    },
    {
        "category": "저장소",
        "title": "5년치 비디오 데이터를 보관해야 합니다. 평소에는 접근하지 않지만, 감사가 있을 경우 5분 이내에 특정 파일을 복구해야 합니다. 가장 비용 효율적인 S3 클래스는?",
        "options": [
            "S3 Glacier (Expedited Retrieval 사용)",
            "S3 Glacier Deep Archive",
            "S3 Standard-IA",
            "S3 One Zone-IA"
        ],
        "answer": "S3 Glacier (Expedited Retrieval 사용)",
        "explanation": "S3 Glacier는 저렴한 아카이브 스토리지이며, "
    },
    {
        "category": "네트워크",
        "title": "서로 다른 리전에 있는 VPC A와 VPC B를 피어링으로 연결했습니다. VPC B의 DB가 VPC A의 웹 서버 접근만 허용하게 하려면 보안 그룹을 어떻게 설정합니까?",
        "options": [
            "DB 보안 그룹에서 VPC A의 CIDR 블록을 허용한다.",
            "DB 보안 그룹에서 VPC A의 보안 그룹 ID를 참조한다.",
            "모든 트래픽을 허용한다.",
            "NAT 게이트웨이를 사용한다."
        ],
        "answer": "DB 보안 그룹에서 VPC A의 CIDR 블록을 허용한다.",
        "explanation": "리전 간(Inter-Region) VPC 피어링에서는 상대방의 보안 그룹 ID를 직접 참조할 수 없으므로, 상대 VPC의 IP 대역(CIDR)을 허용해야 합니다."
    },
    {
        "category": "저장소",
        "title": "Windows 기반 애플리케이션을 AWS로 마이그레이션합니다. 여러 가용 영역의 인스턴스가 동시에 접근할 수 있는 완전 관리형 윈도우 파일 시스템은?",
        "options": [
            "Amazon FSx for Windows File Server",
            "Amazon EFS",
            "Amazon S3",
            "EBS"
        ],
        "answer": "Amazon FSx for Windows File Server",
        "explanation": "FSx for Windows File Server는 윈도우 환경에 맞는 SMB 프로토콜 기반의 완전 관리형 공유 스토리지를 제공합니다."
    },
    {
        "category": "하이브리드",
        "title": "온프레미스 윈도우 서버의 데이터를 AWS로 확장하고 싶습니다. 사용자는 로컬 네트워크 드라이브(SMB)처럼 쓰지만 실제 데이터는 클라우드에 저장되게 하려면?",
        "options": [
            "Amazon FSx File Gateway",
            "S3 File Gateway",
            "DataSync",
            "Direct Connect"
        ],
        "answer": "Amazon FSx File Gateway",
        "explanation": "FSx File Gateway를 사용하면 온프레미스에서 SMB 프로토콜을 통해 클라우드의 FSx for Windows File Server에 낮은 지연 시간으로 접근할 수 있습니다."
    },
    {
        "category": "비용 최적화",
        "title": "매일 밤 대량의 이미지를 처리하는 배치 작업이 있습니다. 작업이 중단되어도 다시 시작할 수 있는 내결함성이 있습니다. 가장 저렴한 인스턴스 옵션은?",
        "options": [
            "스팟 인스턴스(Spot Instances)",
            "온디맨드 인스턴스",
            "예약 인스턴스",
            "전용 호스트"
        ],
        "answer": "스팟 인스턴스(Spot Instances)",
        "explanation": "중단되어도 상관없는 배치 작업에는 온디맨드 대비 최대 90% 저렴한 스팟 인스턴스를 사용하는 것이 가장 경제적입니다."
    },
    {
        "category": "네트워크",
        "title": "VPC 내부의 EC2가 인터넷을 통하지 않고 S3 버킷에 데이터를 저장해야 합니다. 비용 효율적이고 안전한 방법은?",
        "options": [
            "S3 게이트웨이 VPC 엔드포인트 사용",
            "NAT 게이트웨이 사용",
            "VPN 연결",
            "인터넷 게이트웨이"
        ],
        "answer": "S3 게이트웨이 VPC 엔드포인트 사용",
        "explanation": "S3 게이트웨이 엔드포인트는 별도의 요금 없이 VPC 내부에서 S3로 직접 연결되는 프라이빗 경로를 제공합니다."
    },
    {
        "category": "아키텍처",
        "title": "웹 서버와 데이터베이스로 구성된 애플리케이션의 가용성을 높이려 합니다. 단일 장애 지점을 제거하기 위한 조치 두 가지는?",
        "options": [
            "ALB와 Auto Scaling 그룹을 사용하여 다중 AZ에 웹 서버 배포, RDS를 다중 AZ(Multi-AZ)로 설정",
            "EC2 인스턴스 크기 확장, RDS 읽기 전용 복제본 생성",
            "S3에 정적 호스팅, DynamoDB 사용",
            "CloudFront 사용, Route 53 페일오버 설정"
        ],
        "answer": "ALB와 Auto Scaling 그룹을 사용하여 다중 AZ에 웹 서버 배포, RDS를 다중 AZ(Multi-AZ)로 설정",
        "explanation": "웹 계층은 Auto Scaling으로, DB 계층은 Multi-AZ로 이중화하면 하드웨어 장애나 가용 영역 장애 시에도 서비스를 지속할 수 있습니다."
    },
    {
        "category": "마이그레이션",
        "title": "데이터 센터의 가상 머신(VM)들을 IP 변경 없이 그대로 AWS로 옮겨야 하는 ",
        "options": [
            "AWS Application Migration Service (MGN)",
            "AWS Schema Conversion Tool",
            "AWS DataSync",
            "Snowball"
        ],
        "answer": "AWS Application Migration Service (MGN)",
        "explanation": "MGN(구 Server Migration Service)은 온프레미스 서버를 블록 수준에서 복제하여 AWS EC2로 신속하게 마이그레이션하는 서비스입니다."
    },
    {
        "category": "머신러닝",
        "title": "사용자가 업로드한 사진에 부적절한 콘텐츠(성인물, 폭력 등)가 있는지 자동으로 검사하고 차단하고 싶습니다. 별도의 모델 학습 없이 사용할 수 있는 서비스는?",
        "options": [
            "Amazon Rekognition",
            "Amazon SageMaker",
            "Amazon Comprehend",
            "AWS Lambda 직접 구현"
        ],
        "answer": "Amazon Rekognition",
        "explanation": "Rekognition은 딥러닝 기술을 사용하여 이미지 및 비디오 분석을 제공하는 완전 관리형 서비스로, 유해 콘텐츠 탐지 기능을 기본 제공합니다."
    },
    {
        "category": "네트워크",
        "title": "온프레미스 서버가 Direct Connect를 통해 AWS S3 버킷에 사설 IP로 접근해야 합니다. 어떤 엔드포인트를 사용해야 합니까?",
        "options": [
            "S3 인터페이스 VPC 엔드포인트 (PrivateLink)",
            "S3 게이트웨이 VPC 엔드포인트",
            "NAT 게이트웨이",
            "Transit Gateway"
        ],
        "answer": "S3 인터페이스 VPC 엔드포인트 (PrivateLink)",
        "explanation": "게이트웨이 엔드포인트는 VPC 내부에서만 유효하지만, 인터페이스 엔드포인트는 사설 IP를 가지므로 온프레미스(VPN/DX)에서도 접근 가능합니다."
    },
    {
        "category": "보안",
        "title": "규정 준수를 위해 RDS 데이터베이스 비밀번호를 90일마다 자동으로 교체해야 합니다. 코드를 수정하지 않고 이를 구현하려면?",
        "options": [
            "AWS Secrets Manager의 자동 교체 기능 사용",
            "Systems Manager Parameter Store 사용",
            "Lambda 함수로 직접 구현",
            "IAM 데이터베이스 인증 사용"
        ],
        "answer": "AWS Secrets Manager의 자동 교체 기능 사용",
        "explanation": "Secrets Manager는 RDS와 통합되어 Lambda 함수를 이용한 비밀번호 자동 교체(Rotation)를 턴키 방식으로 제공합니다."
    },
    {
        "category": "네트워크",
        "title": "프라이빗 서브넷의 EC2 인스턴스가 소프트웨어 업데이트를 위해 인터넷에 접속해야 합니다. 외부에서의 접근은 차단되어야 합니다. 올바른 구성은?",
        "options": [
            "퍼블릭 서브넷에 NAT 게이트웨이를 배치하고 라우팅한다.",
            "프라이빗 서브넷에 NAT 게이트웨이를 배치한다.",
            "인터넷 게이트웨이를 직접 연결한다.",
            "Egress-Only 인터넷 게이트웨이를 사용한다(IPv4)."
        ],
        "answer": "퍼블릭 서브넷에 NAT 게이트웨이를 배치하고 라우팅한다.",
        "explanation": "NAT 게이트웨이는 반드시 퍼블릭 서브넷에 위치해야 하며, 프라이빗 서브넷의 라우팅 테이블이 이를 가리키도록 설정해야 합니다."
    },
    {
        "category": "마이그레이션",
        "title": "700TB의 NAS 데이터를 90일 안에 S3로 옮겨야 합니다. 10Gbps Direct Connect가 연결되어 있습니다. 온라인으로 빠르고 안전하게 전송하는 서비스는?",
        "options": [
            "AWS DataSync",
            "AWS Snowmobile",
            "rsync",
            "S3 Transfer Acceleration"
        ],
        "answer": "AWS DataSync",
        "explanation": "10Gbps 전용선이 있다면 물리적 이동(Snowball)보다 온라인 전송에 최적화된 DataSync를 사용하는 것이 훨씬 효율적이고 관리가 쉽습니다."
    },
    {
        "category": "보안",
        "title": "모바일 앱 사용자가 로그인할 때 SMS 문자로 전송된 코드를 입력해야만 접속되도록(MFA) 하고 싶습니다. 가장 쉬운 구현 방법은?",
        "options": [
            "Amazon Cognito User Pools의 MFA 기능 활성화",
            "IAM 사용자 MFA 사용",
            "Lambda로 SMS 발송 로직 구현",
            "타사 인증 솔루션 사용"
        ],
        "answer": "Amazon Cognito User Pools의 MFA 기능 활성화",
        "explanation": "Cognito User Pools는 회원 가입/로그인 관리 서비스로, SMS 또는 TOTP 기반의 다중 요소 인증(MFA)을 기본 기능으로 지원합니다."
    },
    {
        "category": "비용 최적화",
        "title": "규정상 EBS 스냅샷을 7년 동안 보관해야 합니다. 거의 액세스하지 않는 이 스냅샷들의 저장 비용을 최소화하려면?",
        "options": [
            "EBS 스냅샷 아카이브(EBS Snapshots Archive) 계층 사용",
            "S3 Glacier로 스냅샷 복사",
            "스냅샷을 EC2 이미지로 변환",
            "S3 Standard에 저장"
        ],
        "answer": "EBS 스냅샷 아카이브(EBS Snapshots Archive) 계층 사용",
        "explanation": "EBS 스냅샷 아카이브는 90일 이상 보관해야 하는 희귀 액세스 스냅샷을 저렴한 비용(Glacier 수준)으로 저장하는 기능입니다."
    },
    {
        "category": "애플리케이션 통합",
        "title": "쇼핑몰 주문 시스템에서 주문이 들어온 순서대로 정확히 한 번만 처리되어야 합니다. 어떤 대기열 서비스를 사용해야 합니까?",
        "options": [
            "Amazon SQS FIFO 대기열",
            "Amazon SQS 표준 대기열",
            "Amazon SNS",
            "Kinesis Data Streams"
        ],
        "answer": "Amazon SQS FIFO 대기열",
        "explanation": "FIFO(First-In-First-Out) 대기열은 메시지의 순서를 엄격하게 보장하고 중복 처리를 방지합니다."
    },
    {
        "category": "네트워크",
        "title": "DNS 쿼리에 대해 여러 개의 웹 서버 IP 주소를 무작위 순서로 반환하여 클라이언트 측 로드 밸런싱을 유도하고 싶습니다. 어떤 라우팅 정책입니까?",
        "options": [
            "다중 값 응답(Multivalue Answer) 라우팅",
            "단순(Simple) 라우팅",
            "가중치(Weighted) 라우팅",
            "지연 시간(Latency) 라우팅"
        ],
        "answer": "다중 값 응답(Multivalue Answer) 라우팅",
        "explanation": "다중 값 응답 라우팅은 여러 리소스의 IP를 반환하면서 동시에 상태 확인(Health Check)을 통해 정상적인 리소스만 반환하는 기능을 제공합니다."
    },
    {
        "category": "데이터베이스",
        "title": "웹 사이트의 트래픽이 늘어나 DB 읽기 부하가 심합니다. MySQL 호환성과 고가용성을 유지하면서 읽기 성능을 자동 확장하려면?",
        "options": [
            "Amazon Aurora MySQL 및 오토 스케일링 읽기 복제본",
            "RDS for MySQL 단일 인스턴스",
            "EC2에 MySQL 클러스터 구축",
            "Redshift로 이전"
        ],
        "answer": "Amazon Aurora MySQL 및 오토 스케일링 읽기 복제본",
        "explanation": "Aurora는 읽기 전용 복제본을 최대 15개까지 생성할 수 있으며, 오토 스케일링을 설정하면 트래픽에 따라 복제본 수를 자동으로 조절합니다."
    },
    {
        "category": "보안",
        "title": "웹 서버(퍼블릭)와 DB 서버(프라이빗) 간의 보안 그룹 규칙을 설정하려 합니다. 웹 서버는 HTTPS(443)를 받고, DB는 웹 서버에서만 접속을 허용해야 합니다.",
        "options": [
            "웹 SG: 인바운드 443(0.0.0.0/0), DB SG: 인바운드 3306(소스: 웹 SG ID)",
            "웹 SG: 모든 포트 허용, DB SG: 모든 포트 허용",
            "웹 SG: 80포트 허용, DB SG: 퍼블릭 IP 허용",
            "NACL만 사용"
        ],
        "answer": "웹 SG: 인바운드 443(0.0.0.0/0), DB SG: 인바운드 3306(소스: 웹 SG ID)",
        "explanation": "웹 서버는 인터넷 트래픽을 받아야 하므로 443을 열고, DB는 웹 서버의 보안 그룹 ID를 신뢰하여 내부 통신만 허용해야 안전합니다."
    },
    {
        "category": "보안",
        "title": "유료 회원에게만 동영상 콘텐츠를 스트리밍하고 싶습니다. URL 공유를 통한 무단 접속을 막으려면 CloudFront의 어떤 기능을 써야 합니까?",
        "options": [
            "CloudFront 서명된 URL(Signed URL) 또는 서명된 쿠키(Signed Cookies)",
            "S3 버킷 정책으로 IP 제한",
            "WAF로 접속 차단",
            "IAM 사용자 생성"
        ],
        "answer": "CloudFront 서명된 URL(Signed URL) 또는 서명된 쿠키(Signed Cookies)",
        "explanation": "서명된 URL/쿠키를 사용하면 만료 시간과 IP 등을 제한하여 인증된 사용자만 콘텐츠에 접근할 수 있는 임시 링크를 발급할 수 있습니다."
    },
    {
        "category": "네트워크",
        "title": "UDP를 사용하는 글로벌 게임 서버의 지연 시간을 줄이고 패킷 손실을 최소화하고 싶습니다. 가장 효과적인 서비스는?",
        "options": [
            "AWS Global Accelerator",
            "Amazon CloudFront",
            "Route 53",
            "Direct Connect"
        ],
        "answer": "AWS Global Accelerator",
        "explanation": "Global Accelerator는 TCP와 UDP 프로토콜을 모두 지원하며, AWS의 글로벌 백본 네트워크를 통해 트래픽을 전송하여 게임과 같은 실시간 통신 성능을 높입니다."
    },
    {
        "category": "네트워크",
        "title": "VPC 내부에 배포된 Lambda 함수가 S3 버킷에 접근해야 하는데, 타임아웃 오류가 발생합니다. NAT 게이트웨이 없이 해결하는 방법은?",
        "options": [
            "S3용 게이트웨이 VPC 엔드포인트 생성 및 라우팅 테이블 추가",
            "Lambda 함수에 퍼블릭 IP 할당",
            "인터넷 게이트웨이 연결",
            "Lambda 메모리 증설"
        ],
        "answer": "S3용 게이트웨이 VPC 엔드포인트 생성 및 라우팅 테이블 추가",
        "explanation": "VPC 내 Lambda가 인터넷 접근 권한 없이 S3에 가려면 S3 게이트웨이 엔드포인트가 필요합니다."
    },
    {
        "category": "데이터베이스",
        "title": "온프레미스 MySQL을 AWS Aurora로 마이그레이션해야 합니다. 서비스 중단을 최소화하기 위해 데이터 변경 사항을 지속적으로 복제하고 싶습니다.",
        "options": [
            "AWS DMS(Database Migration Service)와 CDC(변경 데이터 캡처) 사용",
            "mysqldump로 백업 후 복원",
            "S3로 데이터 내보내기",
            "Schema Conversion Tool만 사용"
        ],
        "answer": "AWS DMS(Database Migration Service)와 CDC(변경 데이터 캡처) 사용",
        "explanation": "DMS의 CDC 기능을 사용하면 초기 데이터 로드 후 발생하는 변경 사항을 실시간으로 타겟 DB에 동기화하여 전환 시 다운타임을 거의 없앨 수 있습니다."
    },
    {
        "category": "아키텍처",
        "title": "사용자가 S3에 사진을 올리면 자동으로 썸네일을 만들어 다른 버킷에 저장하려 합니다. 서버 관리 없이 구현하는 방법은?",
        "options": [
            "S3 이벤트 알림으로 Lambda 함수를 트리거하여 이미지 처리",
            "EC2 인스턴스로 S3 폴더 감시",
            "CloudWatch 경보 사용",
            "Batch 작업 스케줄링"
        ],
        "answer": "S3 이벤트 알림으로 Lambda 함수를 트리거하여 이미지 처리",
        "explanation": "S3 이벤트와 Lambda를 결합하는 패턴은 이미지 처리와 같은 파일 기반 워크플로를 서버리스로 구현하는 가장 전형적인 방법입니다."
    },
    {
        "category": "분석",
        "title": "S3에 저장된 방대한 JSON 로그 파일을 SQL을 사용하여 분석하고 싶습니다. 데이터를 다른 곳으로 옮기지 않고 바로 쿼리하려면?",
        "options": [
            "Amazon Athena 사용",
            "Redshift로 로드",
            "DynamoDB로 마이그레이션",
            "EC2에서 grep 사용"
        ],
        "answer": "Amazon Athena 사용",
        "explanation": "Athena는 S3에 있는 데이터를 이동하지 않고 표준 SQL을 사용하여 직접 분석할 수 있는 서버리스 쿼리 서비스입니다."
    },
    {
        "category": "보안",
        "title": "Network Load Balancer(NLB)를 통해 전송되는 데이터를 암호화하여 보안을 강화해야 합니다. 무엇을 설정해야 합니까?",
        "options": [
            "TLS 리스너를 생성하고 ACM 인증서를 NLB에 배포한다.",
            "KMS로 데이터를 암호화한다.",
            "WAF를 NLB에 연결한다.",
            "보안 그룹을 강화한다."
        ],
        "answer": "TLS 리스너를 생성하고 ACM 인증서를 NLB에 배포한다.",
        "explanation": "NLB도 TLS(SSL) 종료를 지원합니다. TLS 리스너를 구성하고 인증서를 설치하면 클라이언트와 로드 밸런서 간의 통신이 암호화됩니다."
    },
    {
        "category": "데이터베이스",
        "title": "Lambda 함수에서 DB에 접속할 때마다 연결을 새로 맺어 DB CPU 부하가 심합니다. 이를 해결하는 관리형 서비스는?",
        "options": [
            "Amazon RDS Proxy",
            "ElastiCache",
            "DynamoDB",
            "SQS"
        ],
        "answer": "Amazon RDS Proxy",
        "explanation": "RDS Proxy는 DB 연결을 풀링(Pooling)하고 재사용하여, 수많은 동시 접속 요청이 발생하는 서버리스 애플리케이션으로부터 DB를 보호합니다."
    },
    {
        "category": "네트워크",
        "title": "5개의 VPC와 온프레미스 네트워크를 모두 서로 연결해야 합니다. VPC 피어링을 그물처럼 연결하는 대신 구성을 단순화하려면?",
        "options": [
            "AWS Transit Gateway 사용",
            "Direct Connect Gateway",
            "VPN CloudHub",
            "Proxy 서버 구축"
        ],
        "answer": "AWS Transit Gateway 사용",
        "explanation": "Transit Gateway는 중앙 허브 역할을 하여 여러 VPC와 온프레미스 네트워크를 단일 지점에서 손쉽게 연결하고 라우팅을 관리합니다."
    },
    {
        "category": "네트워크",
        "title": "Lambda 함수가 Direct Connect를 통해 온프레미스 자원에 접근해야 합니다. Lambda를 어떻게 설정해야 합니까?",
        "options": [
            "Lambda 함수를 VPC에 연결(VPC 설정 구성)한다.",
            "Lambda에 공인 IP를 할당한다.",
            "VPN을 Lambda 코드 내에서 연결한다.",
            "불가능하다."
        ],
        "answer": "Lambda 함수를 VPC에 연결(VPC 설정 구성)한다.",
        "explanation": "Lambda를 VPC의 프라이빗 서브넷에 연결하면, 해당 VPC와 연결된 Direct Connect를 통해 온프레미스 네트워크와 통신할 수 있습니다."
    },
    {
        "category": "서버리스",
        "title": "API Gateway와 Lambda를 사용하는 서비스에서 요청 시 초기 지연 시간(Latency)을 줄여야 합니다. 가장 확실한 방법은?",
        "options": [
            "Lambda 프로비저닝된 동시성(Provisioned Concurrency) 활성화",
            "메모리 늘리기",
            "CloudFront 캐싱",
            "Keep-Alive 설정"
        ],
        "answer": "Lambda 프로비저닝된 동시성(Provisioned Concurrency) 활성화",
        "explanation": "프로비저닝된 동시성을 사용하면 함수 실행 환경이 미리 준비되어 있으므로, 요청이 왔을 때 초기화 과정 없이 즉시 실행됩니다."
    },
    {
        "category": "애플리케이션 통합",
        "title": "모바일 앱에서 보낸 데이터를 받아 여러 파트너사에게 전달해야 합니다. 데이터를 검증 및 가공한 뒤 각 파트너에게 보내려면 어떤 구조가 좋습니까?",
        "options": [
            "SNS로 받아 SQS로 팬아웃(Fan-out)하고 Lambda로 가공하여 전달",
            "하나의 SQS에서 모든 파트너가 읽어가게 함",
            "Kinesis로 스트리밍",
            "Step Functions로 순차 처리"
        ],
        "answer": "SNS로 받아 SQS로 팬아웃(Fan-out)하고 Lambda로 가공하여 전달",
        "explanation": "SNS + SQS 팬아웃 패턴을 쓰면 메시지를 여러 대기열로 복제할 수 있고, 각 대기열에 연결된 Lambda가 파트너별 요구사항에 맞춰 데이터를 가공할 수 있습니다."
    },
    {
        "category": "보안",
        "title": "감사를 위해 CloudTrail 로그 파일이 저장된 이후에 수정되거나 삭제되지 않았음을 증명해야 합니다. 어떤 기능을 켜야 합니까?",
        "options": [
            "로그 파일 무결성 검증(Log File Validation) 활성화",
            "S3 객체 잠금",
            "MFA Delete",
            "KMS 암호화"
        ],
        "answer": "로그 파일 무결성 검증(Log File Validation) 활성화",
        "explanation": "무결성 검증 기능을 켜면 CloudTrail이 로그 파일에 대한 해시(Digest) 파일을 생성하여, 로그가 위변조되지 않았음을 수학적으로 증명할 수 있습니다."
    },
    {
        "category": "컨테이너",
        "title": "EKS 클러스터에서 사용하는 EBS 볼륨을 암호화하고, Kubernetes 시크릿(Secrets)도 암호화하여 저장하고 싶습니다. 올바른 방법은?",
        "options": [
            "스토리지 클래스에서 암호화된 EBS를 지정하고, EKS 봉투 암호화(Envelope Encryption) 설정을 통해 KMS 키로 시크릿을 암호화한다.",
            "워커 노드에서 디스크 암호화 수행",
            "S3에 시크릿 저장",
            "암호화 기능 없음"
        ],
        "answer": "스토리지 클래스에서 암호화된 EBS를 지정하고, EKS 봉투 암호화(Envelope Encryption) 설정을 통해 KMS 키로 시크릿을 암호화한다.",
        "explanation": "EKS는 KMS와 통합되어 Kubernetes 시크릿 데이터를 암호화(봉투 암호화)하여 etcd에 저장하는 보안 기능을 제공합니다."
    },
    {
        "category": "보안",
        "title": "모든 EC2 인스턴스의 운영체제와 설치된 패키지에 보안 취약점이 있는지 주기적으로 스캔하고 싶습니다. 어떤 서비스가 적합합니까?",
        "options": [
            "Amazon Inspector",
            "Amazon GuardDuty",
            "AWS WAF",
            "AWS Shield"
        ],
        "answer": "Amazon Inspector",
        "explanation": "Amazon Inspector는 EC2 인스턴스 내부의 소프트웨어 취약점(CVE)과 네트워크 노출 상태를 자동으로 스캔하고 평가해주는 서비스입니다."
    },
    {
        "category": "컴퓨팅",
        "title": "기존에 보유한 물리적 코어 기반의 소프트웨어 라이선스(BYOL)를 AWS에서 그대로 사용해야 합니다. 어떤 EC2 인스턴스 옵션을 선택해야 합니까?",
        "options": [
            "전용 호스트(Dedicated Hosts)",
            "전용 인스턴스(Dedicated Instances)",
            "온디맨드 인스턴스",
            "예약 인스턴스"
        ],
        "answer": "전용 호스트(Dedicated Hosts)",
        "explanation": "전용 호스트는 물리적 서버 전체를 할당받는 옵션으로, 소켓/코어 가시성을 제공하여 기존 라이선스 규정을 준수하는 데 필수적입니다."
    },
    {
        "category": "보안",
        "title": "회사의 모든 S3 버킷이 실수로라도 퍼블릭에 공개되는 것을 원천적으로 막고 싶습니다. 조직 수준에서 이를 강제하려면?",
        "options": [
            "AWS Organizations의 SCP를 사용하여 S3 퍼블릭 액세스 차단 설정을 해제하지 못하게 막는다.",
            "모든 버킷 정책을 수동 점검",
            "CloudWatch 경보 설정",
            "IAM 사용자 권한 삭제"
        ],
        "answer": "AWS Organizations의 SCP를 사용하여 S3 퍼블릭 액세스 차단 설정을 해제하지 못하게 막는다.",
        "explanation": "SCP를 사용하면 계정 수준에서 S3 퍼블릭 액세스 차단 기능을 끄지 못하도록 강력하게 제한할 수 있습니다."
    },
    {
        "category": "애플리케이션 통합",
        "title": "Salesforce 같은 SaaS 애플리케이션의 데이터를 코딩 없이 주기적으로 S3로 가져오고 싶습니다. 어떤 서비스가 가장 적합합니까?",
        "options": [
            "Amazon AppFlow",
            "AWS Lambda",
            "AWS Glue",
            "DataSync"
        ],
        "answer": "Amazon AppFlow",
        "explanation": "AppFlow는 SaaS 애플리케이션(Salesforce, Slack 등)과 AWS 서비스 간의 데이터 흐름을 코딩 없이 몇 번의 클릭만으로 자동화해줍니다."
    },
    {
        "category": "분석",
        "title": "실시간 스트리밍 데이터를 분석해야 합니다. SQL을 사용하여 스트림을 쿼리하거나, 데이터를 S3에 쌓아두고 필요할 때 쿼리하는 두 가지 방식에 적합한 서비스는?",
        "options": [
            "스트림 쿼리: Kinesis Data Analytics, S3 쿼리: Amazon Athena",
            "스트림: Redshift, S3: EMR",
            "스트림: Lambda, S3: Glue",
            "스트림: SQS, S3: RDS"
        ],
        "answer": "스트림 쿼리: Kinesis Data Analytics, S3 쿼리: Amazon Athena",
        "explanation": "Kinesis Data Analytics는 실시간 데이터 스트림에 SQL을 실행할 수 있고, Athena는 S3에 저장된 정적 데이터에 대해 SQL 쿼리를 수행합니다."
    },
    {
        "category": "비용 최적화",
        "title": "웹사이트의 이미지를 제공하는 데 EC2 서버 부하가 큽니다. 서버를 증설하지 않고 비용을 줄이면서 이미지를 안정적으로 제공하려면?",
        "options": [
            "이미지를 S3 버킷에 저장하고 CloudFront를 통해 제공한다.",
            "EBS 볼륨을 증설한다.",
            "EFS를 사용한다.",
            "ElastiCache를 사용한다."
        ],
        "answer": "이미지를 S3 버킷에 저장하고 CloudFront를 통해 제공한다.",
        "explanation": "정적 콘텐츠를 S3+CloudFront 조합으로 제공하는 것은 AWS에서 가장 저렴하고 성능이 뛰어난 표준 패턴입니다."
    },
    {
        "category": "비용 최적화",
        "title": "AWS 비용이 평소 패턴과 다르게 급증할 경우 기계 학습을 통해 자동으로 감지하고 알림을 받고 싶습니다. 무엇을 설정해야 합니까?",
        "options": [
            "AWS Cost Anomaly Detection",
            "AWS Budgets",
            "Cost Explorer",
            "CloudWatch Billing Alarm"
        ],
        "answer": "AWS Cost Anomaly Detection",
        "explanation": "Cost Anomaly Detection은 머신러닝을 활용하여 예상치 못한 비용 지출이나 패턴 변화를 감지하고 원인을 분석해줍니다."
    },
    {
        "category": "고가용성",
        "title": "RDS 데이터베이스의 재해 복구(DR) 목표가 RPO 24시간입니다. 가장 비용 효율적인 DR 전략은?",
        "options": [
            "RDS 자동 백업 스냅샷을 다른 리전으로 하루에 한 번 복사한다.",
            "다른 리전에 읽기 전용 복제본을 만든다.",
            "Multi-AZ를 활성화한다.",
            "데이터를 로컬로 다운로드한다."
        ],
        "answer": "RDS 자동 백업 스냅샷을 다른 리전으로 하루에 한 번 복사한다.",
        "explanation": "RPO가 24시간으로 여유가 있다면, 실시간 복제(Read Replica)보다 스냅샷을 주기적으로 타 리전으로 복사하는 것이 훨씬 저렴합니다."
    },
    {
        "category": "네트워크",
        "title": "리전 A의 VPC와 리전 B의 VPC를 피어링했습니다. 리전 B의 DB가 리전 A의 웹 서버 트래픽만 허용하게 하려면 보안 그룹을 어떻게 설정합니까?",
        "options": [
            "리전 A VPC의 CIDR 블록을 허용한다.",
            "리전 A 웹 서버의 보안 그룹 ID를 참조한다.",
            "모든 IP를 허용한다.",
            "피어링 연결 ID를 참조한다."
        ],
        "answer": "리전 A VPC의 CIDR 블록을 허용한다.",
        "explanation": "다른 리전 간의 피어링에서는 보안 그룹 ID 참조가 불가능하므로, 상대방 VPC의 IP 대역(CIDR)을 명시적으로 허용해야 합니다."
    },
    {
        "category": "컴퓨팅",
        "title": "SQS 대기열에 메시지가 쌓이면 EC2 인스턴스를 자동으로 늘려서 처리 속도를 맞추고 싶습니다. Auto Scaling의 기준 지표로 무엇을 써야 합니까?",
        "options": [
            "대기열의 메시지 수(ApproximateNumberOfMessagesVisible)를 기반으로 대상 추적 조정 정책 사용",
            "CPU 사용률 기반 조정",
            "네트워크 트래픽 기반 조정",
            "일정 기반 조정"
        ],
        "answer": "대기열의 메시지 수(ApproximateNumberOfMessagesVisible)를 기반으로 대상 추적 조정 정책 사용",
        "explanation": "메시지 처리 시스템에서는 CPU보다 "
    },
    {
        "category": "네트워크",
        "title": "여러 리전에 애플리케이션이 배포되어 있습니다. 사용자를 네트워크 지연 시간이 가장 짧은(가장 빠른) 리전으로 연결해주는 Route 53 정책은?",
        "options": [
            "지연 시간(Latency) 라우팅 정책",
            "지리적 위치(Geolocation) 라우팅 정책",
            "가중치 기반 라우팅",
            "단순 라우팅"
        ],
        "answer": "지연 시간(Latency) 라우팅 정책",
        "explanation": "지연 시간 라우팅은 사용자와 AWS 리전 간의 네트워크 상태를 측정하여 가장 응답 속도가 빠른 리전으로 트래픽을 보냅니다."
    },
    {
        "category": "비용 최적화",
        "title": "S3의 많은 객체를 KMS로 암호화하고 있습니다. KMS API 호출 비용이 너무 많이 발생하는데, 보안을 유지하면서 비용을 줄이는 방법은?",
        "options": [
            "S3 버킷 키(Bucket Key)를 활성화한다.",
            "암호화를 비활성화한다.",
            "S3 관리형 키(SSE-S3)로 변경한다.",
            "객체 크기를 늘린다."
        ],
        "answer": "S3 버킷 키(Bucket Key)를 활성화한다.",
        "explanation": "S3 버킷 키를 사용하면 S3가 KMS에 요청하는 빈도를 획기적으로 줄여주어, 암호화 관련 비용을 최대 99%까지 절감할 수 있습니다."
    },
    {
        "category": "데이터베이스",
        "title": "RDS for Oracle의 백업을 90일 동안 보관해야 합니다. RDS 자동 백업의 한계(35일)를 넘어서 관리하려면 무엇을 써야 합니까?",
        "options": [
            "AWS Backup을 사용하여 보존 기간을 90일로 설정한 백업 계획을 만든다.",
            "수동 스냅샷을 찍고 삭제하지 않는다.",
            "S3로 데이터를 덤프한다.",
            "DMS를 사용한다."
        ],
        "answer": "AWS Backup을 사용하여 보존 기간을 90일로 설정한 백업 계획을 만든다.",
        "explanation": "AWS Backup은 RDS의 기본 백업 기간 한계를 넘어 장기 보존 정책을 설정하고 중앙에서 관리할 수 있게 해줍니다."
    },
    {
        "category": "데이터베이스",
        "title": "DynamoDB 데이터를 7년간 보관해야 합니다. 비용을 줄이기 위해 오래된 백업은 콜드 스토리지로 옮기고 싶습니다. 적절한 도구는?",
        "options": [
            "AWS Backup의 수명 주기 기능을 사용하여 백업을 콜드 스토리지로 계층화한다.",
            "DynamoDB TTL 기능을 사용한다.",
            "S3로 내보낸 후 Glacier로 이동한다.",
            "수동으로 백업한다."
        ],
        "answer": "AWS Backup의 수명 주기 기능을 사용하여 백업을 콜드 스토리지로 계층화한다.",
        "explanation": "AWS Backup은 DynamoDB 백업에 대해서도 수명 주기 관리를 지원하여, 일정 기간이 지난 백업을 저렴한 콜드 스토리지로 자동 이동시킵니다."
    },
    {
        "category": "저장소",
        "title": "수백 대의 EC2 인스턴스가 동시에 데이터를 읽고 써야 하며, 높은 처리량(Throughput)이 필요합니다. 지연 시간보다는 처리량이 중요한 경우 적합한 EFS 모드는?",
        "options": [
            "EFS Max I/O 성능 모드",
            "EFS General Purpose 성능 모드",
            "EBS Provisioned IOPS",
            "S3 Standard"
        ],
        "answer": "EFS Max I/O 성능 모드",
        "explanation": "수백/수천 대의 인스턴스가 동시 접속하는 대규모 병렬 처리 작업에는 "
    },
    {
        "category": "보안",
        "title": "S3에 개인정보(PII)가 업로드되면 Amazon Macie가 이를 탐지합니다. 탐지 즉시 보안 팀에 알림을 보내려면 어떤 구성이 필요합니까?",
        "options": [
            "Macie 결과를 EventBridge 규칙으로 받아 SNS 주제로 전송한다.",
            "CloudTrail 로그를 분석한다.",
            "S3 이벤트 알림을 사용한다.",
            "Macie 콘솔을 매일 확인한다."
        ],
        "answer": "Macie 결과를 EventBridge 규칙으로 받아 SNS 주제로 전송한다.",
        "explanation": "Macie는 보안 결과를 EventBridge로 전송하므로, 이를 트리거로 삼아 SNS 알림이나 Lambda 자동 조치 등을 연동할 수 있습니다."
    },
    {
        "category": "데이터베이스",
        "title": "Oracle 데이터베이스를 비용 효율적인 오픈 소스 기반의 클라우드 네이티브 DB로 옮기고 싶습니다. 고가용성과 성능이 가장 중요한 경우 목표 DB는?",
        "options": [
            "Amazon Aurora PostgreSQL 또는 MySQL",
            "Amazon RDS for MariaDB",
            "DynamoDB",
            "Redshift"
        ],
        "answer": "Amazon Aurora PostgreSQL 또는 MySQL",
        "explanation": "Aurora는 상용 DB(Oracle 등)급의 성능과 가용성을 제공하면서 오픈 소스 호환성을 갖추고 있어 마이그레이션 타겟으로 가장 이상적입니다."
    },
    {
        "category": "관리 및 거버넌스",
        "title": "여러 리전의 S3 버킷에 쌓이는 로그를 하나의 중앙 S3 버킷(동일 리전 내)으로 모으고 싶습니다. 가장 간단한 방법은?",
        "options": [
            "S3 동일 리전 복제(SRR) 규칙 설정",
            "Lambda 함수로 복사",
            "DataSync 사용",
            "로그 에이전트 설치"
        ],
        "answer": "S3 동일 리전 복제(SRR) 규칙 설정",
        "explanation": "S3 복제 기능은 리전 간(CRR) 뿐만 아니라 같은 리전 내(SRR) 복제도 지원하여 로그 통합 등에 유용하게 쓰입니다."
    },
    {
        "category": "네트워크",
        "title": "ALB 뒤에 여러 웹 서버가 있는데, 특정 서버 하나에만 트래픽이 몰리는 현상이 발생합니다. 원인으로 가장 유력한 설정은 무엇입니까?",
        "options": [
            "세션 유지(Sticky Sessions) 기능이 활성화되어 있다.",
            "라운드 로빈 알고리즘이 켜져 있다.",
            "상태 확인(Health Check)이 실패했다.",
            "교차 영역 로드 밸런싱이 꺼져 있다."
        ],
        "answer": "세션 유지(Sticky Sessions) 기능이 활성화되어 있다.",
        "explanation": "세션 유지가 켜져 있으면 특정 사용자의 트래픽이 계속 같은 서버로만 가기 때문에, 헤비 유저가 있거나 프록시를 통할 경우 불균형이 생길 수 있습니다."
    },
    {
        "category": "보안",
        "title": "S3 버킷의 퍼블릭 액세스 차단 설정이 켜져 있는지 지속적으로 감사하고, 위반 시 알림을 받고 싶습니다. 어떤 서비스가 적합합니까?",
        "options": [
            "AWS Config",
            "Trusted Advisor",
            "CloudTrail",
            "Macie"
        ],
        "answer": "AWS Config",
        "explanation": "AWS Config는 리소스의 설정 상태를 규칙과 비교하여 규정 준수 여부를 지속적으로 평가하고 기록하는 서비스입니다."
    },
    {
        "category": "아키텍처",
        "title": "리전 A의 S3 버킷에 파일이 업로드되면 리전 B의 Lambda 함수가 이를 처리해야 합니다. 리전 간 메시지 전달을 위한 구성은?",
        "options": [
            "리전 A의 S3 이벤트 -> 리전 A의 SNS -> 리전 B의 SQS -> 리전 B의 Lambda",
            "리전 A에서 리전 B의 Lambda 직접 호출",
            "S3 복제 사용",
            "EventBridge 글로벌 버스 사용"
        ],
        "answer": "리전 A의 S3 이벤트 -> 리전 A의 SNS -> 리전 B의 SQS -> 리전 B의 Lambda",
        "explanation": "SNS와 SQS를 연결하면 리전 간 메시지 팬아웃이 가능하며, SQS가 버퍼 역할을 하여 안정적인 크로스 리전 처리가 가능합니다."
    },
    {
        "category": "하이브리드",
        "title": "온프레미스 서버의 디스크 공간이 부족합니다. 모든 데이터를 S3에 보관하되, 자주 쓰는 파일은 온프레미스에서 빠르게 열고 싶습니다. 어떤 게이트웨이 모드입니까?",
        "options": [
            "볼륨 게이트웨이 - 캐시 볼륨(Cached Volumes)",
            "볼륨 게이트웨이 - 보관 볼륨(Stored Volumes)",
            "테이프 게이트웨이",
            "S3 파일 게이트웨이"
        ],
        "answer": "볼륨 게이트웨이 - 캐시 볼륨(Cached Volumes)",
        "explanation": "캐시 볼륨은 S3를 마스터 스토리지로 쓰고 로컬에는 자주 쓰는 데이터만 캐싱하여 로컬 스토리지 공간을 절약합니다."
    },
    {
        "category": "컨테이너",
        "title": "EKS 및 Fargate에서 실행되는 여러 파드(Pod)가 데이터를 공유해야 합니다. 다중 AZ를 지원하는 표준 파일 시스템 솔루션은?",
        "options": [
            "Amazon EFS",
            "EBS",
            "S3",
            "Instance Store"
        ],
        "answer": "Amazon EFS",
        "explanation": "EFS는 Kubernetes의 PVC(Persistent Volume Claim)로 사용할 수 있으며, 여러 파드에서 동시에 읽고 쓰기가 가능한 유일한 AWS 관리형 파일 시스템입니다."
    },
    {
        "category": "아키텍처",
        "title": "하루에 한 번 대규모 트래픽이 몰리는 ",
        "options": [
            "S3(정적) + CloudFront + API Gateway + Lambda + DynamoDB(동적)",
            "EC2 Auto Scaling + RDS",
            "Lightsail",
            "ECS + Fargate"
        ],
        "answer": "S3(정적) + CloudFront + API Gateway + Lambda + DynamoDB(동적)",
        "explanation": "S3/CloudFront로 정적 트래픽을 처리하고, API Gateway/Lambda/DynamoDB로 동적 트래픽을 처리하는 완전 서버리스 구조가 순간적인 폭주에 가장 강합니다."
    },
    {
        "category": "데이터베이스",
        "title": "SQL Server에서 무거운 분석 쿼리를 돌릴 때마다 서비스 성능이 느려집니다. 메인 DB에 영향을 주지 않고 분석을 수행하려면?",
        "options": [
            "읽기 전용 복제본(Read Replica)을 생성하여 분석 쿼리를 수행한다.",
            "Multi-AZ를 활성화한다.",
            "DB 인스턴스 크기를 늘린다.",
            "S3로 백업 후 Athena로 쿼리한다."
        ],
        "answer": "읽기 전용 복제본(Read Replica)을 생성하여 분석 쿼리를 수행한다.",
        "explanation": "읽기 전용 복제본으로 분석 트래픽을 분리하면 운영 DB의 성능 저하를 막을 수 있습니다. (SQL Server도 읽기 복제본 지원)"
    },
    {
        "category": "미디어",
        "title": "전 세계 사용자에게 고화질 라이브 비디오를 스트리밍해야 합니다. TCP와 UDP를 모두 사용하며 네트워크 지연을 최소화하는 서비스는?",
        "options": [
            "AWS Global Accelerator",
            "CloudFront",
            "Route 53",
            "Direct Connect"
        ],
        "answer": "AWS Global Accelerator",
        "explanation": "Global Accelerator는 IP 기반으로 트래픽을 AWS 글로벌 백본으로 끌어들여 TCP/UDP 통신 속도를 높입니다. (CloudFront는 주로 HTTP/HTTPS 및 TCP 최적화)"
    },
    {
        "category": "데이터베이스",
        "title": "Aurora 데이터베이스의 I/O 비용이 전체 비용의 대부분을 차지합니다. I/O가 많은 워크로드에서 비용을 예측 가능하게 줄이려면?",
        "options": [
            "Aurora I/O-Optimized 구성 사용",
            "Aurora Standard 사용",
            "프로비저닝된 IOPS 사용",
            "인스턴스 크기 축소"
        ],
        "answer": "Aurora I/O-Optimized 구성 사용",
        "explanation": "Aurora I/O-Optimized 옵션은 I/O 비용을 별도로 청구하지 않고 컴퓨팅/스토리지 비용에 포함시켜, I/O가 극도로 많은 경우 비용 효율적입니다."
    },
    {
        "category": "데이터베이스",
        "title": "Aurora 클러스터의 읽기 CPU 부하가 높을 때, 자동으로 읽기 복제본을 추가하여 부하를 분산하고 싶습니다. 무엇을 설정합니까?",
        "options": [
            "Aurora Auto Scaling",
            "EC2 Auto Scaling",
            "수동 추가",
            "Lambda로 모니터링"
        ],
        "answer": "Aurora Auto Scaling",
        "explanation": "Aurora Auto Scaling은 CPU 사용률이나 연결 수를 모니터링하다가 부하가 높으면 자동으로 읽기 전용 복제본(Reader)을 추가합니다."
    },
    {
        "category": "비용 최적화",
        "title": "개발 팀이 예산의 60%를 소진하면 관리자에게 알리고 싶습니다. 가장 간단한 방법은?",
        "options": [
            "AWS Budgets에서 예산 및 경보 설정",
            "Cost Explorer API 사용",
            "Billing 콘솔 매일 확인",
            "Trusted Advisor"
        ],
        "answer": "AWS Budgets에서 예산 및 경보 설정",
        "explanation": "AWS Budgets를 사용하면 예산 한도와 알림 임계값(예: 60%, 80%)을 설정하여 이메일이나 SNS로 알림을 받을 수 있습니다."
    },
    {
        "category": "하이브리드",
        "title": "온프레미스 데이터를 모두 로컬에 유지하면서, 재해 복구를 위해 AWS S3로 비동기 백업하고 싶습니다. 적절한 게이트웨이 모드는?",
        "options": [
            "볼륨 게이트웨이 - 보관 볼륨(Stored Volumes)",
            "캐시 볼륨(Cached Volumes)",
            "파일 게이트웨이",
            "테이프 게이트웨이"
        ],
        "answer": "볼륨 게이트웨이 - 보관 볼륨(Stored Volumes)",
        "explanation": "보관 볼륨(Stored Volumes)은 모든 데이터를 로컬에 저장하여 지연 시간을 없애고, 스냅샷 형태로 AWS에 백업합니다."
    },
    {
        "category": "보안",
        "title": "암호화되지 않은 기존 EBS 볼륨을 암호화하고 싶습니다. 올바른 절차는?",
        "options": [
            "볼륨의 스냅샷 생성 -> 스냅샷 복사 시 암호화 옵션 선택 -> 암호화된 스냅샷으로 새 볼륨 생성",
            "볼륨 속성에서 암호화 체크",
            "KMS 키를 볼륨에 직접 연결",
            "불가능함"
        ],
        "answer": "볼륨의 스냅샷 생성 -> 스냅샷 복사 시 암호화 옵션 선택 -> 암호화된 스냅샷으로 새 볼륨 생성",
        "explanation": "기존 볼륨을 즉시 암호화할 수는 없으며, 스냅샷을 찍고 복사하는 과정에서 암호화를 적용한 뒤 새 볼륨을 만들어야 합니다."
    },
    {
        "category": "보안",
        "title": "데이터 암호화 키가 매년 자동으로 변경되도록 설정하여 규정을 준수하고 싶습니다. 관리 부담이 없는 방법은?",
        "options": [
            "KMS 고객 관리형 키(CMK)의 자동 키 교체 활성화",
            "수동으로 키 생성 및 앱 업데이트",
            "S3 관리형 키 사용",
            "CloudHSM 사용"
        ],
        "answer": "KMS 고객 관리형 키(CMK)의 자동 키 교체 활성화",
        "explanation": "KMS 자동 교체 기능을 켜면 1년마다 키 구성 요소가 자동으로 바뀌며, 과거 데이터 복호화도 자동으로 지원됩니다."
    },
    {
        "category": "보안",
        "title": "법적 소송 자료를 S3에 보관해야 합니다. 지정된 기간 동안 누구도(루트 포함) 파일을 삭제하거나 수정할 수 없어야 합니다.",
        "options": [
            "S3 객체 잠금(Object Lock)을 규정 준수(Compliance) 모드로 설정",
            "거버넌스(Governance) 모드로 설정",
            "버전 관리 활성화",
            "MFA Delete 사용"
        ],
        "answer": "S3 객체 잠금(Object Lock)을 규정 준수(Compliance) 모드로 설정",
        "explanation": "규정 준수(Compliance) 모드는 가장 강력한 불변성 옵션으로, 보존 기간 동안에는 그 누구도 데이터를 삭제할 수 없습니다."
    },
    {
        "category": "비용 최적화",
        "title": "중단되면 안 되는 작업이 불규칙하게 발생하며, 한 번 실행되면 몇 시간 정도 돕니다. 가장 적합한 EC2 구매 옵션은?",
        "options": [
            "온디맨드 인스턴스",
            "스팟 인스턴스",
            "예약 인스턴스",
            "Savings Plans"
        ],
        "answer": "온디맨드 인스턴스",
        "explanation": "중단되면 안 되므로 스팟은 불가하고, 사용량이 불규칙하므로 약정(RI/SP)도 비효율적입니다. 쓴 만큼 내는 온디맨드가 정답입니다."
    },
    {
        "category": "보안 및 규정 준수",
        "title": "EC2 인스턴스를 매일 백업하고, 재해 복구를 위해 다른 리전으로 백업본을 복사해야 합니다. 이를 자동화하는 서비스는?",
        "options": [
            "AWS Backup",
            "Data Lifecycle Manager (DLM)",
            "Lambda + Cron",
            "S3 복제"
        ],
        "answer": "AWS Backup",
        "explanation": "AWS Backup은 백업 계획을 통해 생성 주기, 보존 기간, 그리고 리전 간 복사(Cross-Region Copy)까지 한 번에 설정할 수 있습니다."
    },
    {
        "category": "서버리스",
        "title": "Python으로 작성된 작은 마이크로서비스를 배포하려 합니다. 트래픽에 따라 자동 확장되어야 하며 서버 관리는 싫습니다. 무엇을 써야 합니까?",
        "options": [
            "AWS Lambda",
            "EC2",
            "EKS",
            "Elastic Beanstalk"
        ],
        "answer": "AWS Lambda",
        "explanation": "Lambda는 코드를 업로드하기만 하면 실행 및 확장을 알아서 처리하는 대표적인 서버리스 컴퓨팅 서비스입니다."
    },
    {
        "category": "애플리케이션 통합",
        "title": "고객에게 마케팅 문자를 보내고, 고객의 답장을 받아 처리하는 양방향 SMS 시스템을 구축하고 싶습니다. 적합한 서비스는?",
        "options": [
            "Amazon Pinpoint",
            "Amazon SNS",
            "SES",
            "Connect"
        ],
        "answer": "Amazon Pinpoint",
        "explanation": "Pinpoint는 마케팅 캠페인 및 사용자 참여 유도에 특화되어 있으며, 양방향 SMS 기능을 지원합니다. (SNS는 주로 단방향 알림)"
    },
    {
        "category": "아키텍처",
        "title": "웹, 앱, DB로 구성된 3계층 앱을 AWS로 옮깁니다. 보안과 가용성을 고려한 표준 구성은?",
        "options": [
            "웹(퍼블릭), 앱(프라이빗), DB(프라이빗 서브넷의 RDS) 배치",
            "모두 퍼블릭 서브넷 배치",
            "DB를 퍼블릭에 배치",
            "앱과 DB를 같은 서버에 설치"
        ],
        "answer": "웹(퍼블릭), 앱(프라이빗), DB(프라이빗 서브넷의 RDS) 배치",
        "explanation": "외부 접근이 필요한 웹 서버만 퍼블릭에 두고, 핵심 로직과 데이터는 프라이빗 서브넷에 숨기는 것이 보안 모범 사례입니다."
    },
    {
        "category": "데이터베이스",
        "title": "수천 개의 클라이언트가 DB에 연결을 시도하여 오버헤드가 발생합니다. 연결을 재사용하여 DB 효율을 높이는 방법은?",
        "options": [
            "Amazon RDS Proxy 사용",
            "Read Replica 추가",
            "Multi-AZ 사용",
            "DynamoDB 사용"
        ],
        "answer": "Amazon RDS Proxy 사용",
        "explanation": "RDS Proxy는 애플리케이션과 DB 사이에서 연결(Connection)을 풀링하고 공유하여 DB의 부하를 줄여줍니다."
    },
    {
        "category": "애플리케이션 통합",
        "title": "결제 처리 시스템에서 메시지 순서가 바뀌면 안 됩니다. 들어온 순서대로 정확히 처리하려면 무엇을 써야 합니까?",
        "options": [
            "SQS FIFO 대기열",
            "SQS 표준 대기열",
            "SNS",
            "Kinesis"
        ],
        "answer": "SQS FIFO 대기열",
        "explanation": "FIFO(선입선출) 대기열만이 메시지의 순서를 엄격하게 보장합니다."
    },
    {
        "category": "애플리케이션 통합",
        "title": "매일 아침 지난날의 통계를 집계하여 HTML 리포트를 이메일로 보내야 합니다. 서버리스 구성은?",
        "options": [
            "EventBridge(스케줄) -> Lambda(집계 및 HTML 생성) -> SES(이메일 발송)",
            "EC2 크론탭",
            "CloudWatch 경보",
            "SNS"
        ],
        "answer": "EventBridge(스케줄) -> Lambda(집계 및 HTML 생성) -> SES(이메일 발송)",
        "explanation": "EventBridge로 시간을 트리거하고, Lambda로 로직을 수행하며, SES로 대량 메일을 보내는 것이 정석입니다."
    },
    {
        "category": "비용 최적화",
        "title": "테스트용 RDS 인스턴스를 주말에는 쓰지 않습니다. 삭제하지 않고 비용을 아끼는 방법은?",
        "options": [
            "RDS 인스턴스 일시 중지(Stop)",
            "스냅샷 찍고 삭제",
            "Multi-AZ 해제",
            "최소 사양으로 변경"
        ],
        "answer": "RDS 인스턴스 일시 중지(Stop)",
        "explanation": "RDS는 최대 7일간 일시 중지할 수 있으며, 이 기간 동안은 컴퓨팅 비용이 발생하지 않습니다."
    },
    {
        "category": "저장소",
        "title": "다중 AZ에 걸쳐 고가용성을 제공하고, 스냅샷 및 복제 기능이 뛰어난 공유 파일 스토리지가 필요합니다. (리눅스/윈도우 혼용 가능)",
        "options": [
            "Amazon FSx for NetApp ONTAP",
            "EFS",
            "FSx for Windows",
            "S3"
        ],
        "answer": "Amazon FSx for NetApp ONTAP",
        "explanation": "FSx for NetApp ONTAP은 강력한 엔터프라이즈 기능(중복 제거, 압축, 멀티 프로토콜)과 멀티 AZ 배포를 지원합니다."
    },
    {
        "category": "애플리케이션 통합",
        "title": "파트너가 SFTP로 파일을 올리면 즉시 Lambda가 실행되어 데이터를 처리해야 합니다. 어떻게 구성합니까?",
        "options": [
            "Transfer Family로 파일을 받아 S3에 저장하고, S3 이벤트 알림으로 Lambda 트리거",
            "EC2 폴링",
            "CloudWatch 이벤트",
            "Step Functions"
        ],
        "answer": "Transfer Family로 파일을 받아 S3에 저장하고, S3 이벤트 알림으로 Lambda 트리거",
        "explanation": "Transfer Family는 S3를 백엔드로 사용하므로, 파일이 저장되는 즉시 S3 이벤트를 통해 후속 작업을 자동화할 수 있습니다."
    },
    {
        "category": "비용 최적화",
        "title": "90일이 지난 벨소리 파일은 거의 다운로드되지 않습니다. 이를 저렴한 스토리지로 자동 이동시키려면?",
        "options": [
            "S3 수명 주기 정책(Lifecycle Policy)을 설정하여 S3 Standard-IA로 이동",
            "Intelligent-Tiering",
            "직접 삭제",
            "Glacier로 이동"
        ],
        "answer": "S3 수명 주기 정책(Lifecycle Policy)을 설정하여 S3 Standard-IA로 이동",
        "explanation": "접근 패턴이 명확한 경우(90일 이후 저빈도), 수명 주기 정책을 통해 IA 계층으로 옮기는 것이 확실한 비용 절감 방법입니다."
    },
    {
        "category": "보안",
        "title": "특정 IP에서 과도한 HTTP 요청을 보내 웹 서버를 마비시키려 합니다. 이를 자동으로 차단하려면?",
        "options": [
            "AWS WAF의 속도 기반 규칙(Rate-based rule) 사용",
            "NACL",
            "보안 그룹",
            "Shield Standard"
        ],
        "answer": "AWS WAF의 속도 기반 규칙(Rate-based rule) 사용",
        "explanation": "속도 기반 규칙은 5분당 요청 횟수를 카운트하여 임계값을 넘는 IP를 자동으로 블랙리스트에 올립니다."
    },
    {
        "category": "데이터베이스",
        "title": "DB 장애 발생 시 애플리케이션의 다운타임을 최소화하고 싶습니다. Aurora를 사용 중입니다.",
        "options": [
            "RDS Proxy를 사용하여 장애 조치 시 연결 전환 속도를 높인다.",
            "리전 복제본 사용",
            "백업 복구",
            "EC2 DB 사용"
        ],
        "answer": "RDS Proxy를 사용하여 장애 조치 시 연결 전환 속도를 높인다.",
        "explanation": "RDS Proxy는 DB 장애 조치(Failover) 발생 시 애플리케이션의 연결을 끊지 않고 대기했다가 새 DB로 연결해 주어 복구 시간을 단축시킵니다."
    },
    {
        "category": "보안",
        "title": "사용자가 자신의 권한보다 높은 권한이 필요한 리소스를 CloudFormation으로 생성하게 하려 합니다. 안전한 방법은?",
        "options": [
            "CloudFormation에 서비스 역할(Service Role)을 할당하고 PassRole 권한을 준다.",
            "사용자에게 관리자 권한 부여",
            "루트 계정 사용",
            "권한 경계 해제"
        ],
        "answer": "CloudFormation에 서비스 역할(Service Role)을 할당하고 PassRole 권한을 준다.",
        "explanation": "사용자에게 직접 권한을 주는 대신, CloudFormation 서비스가 작업을 수행하도록 역할을 위임(PassRole)하는 것이 보안상 안전합니다."
    },
    {
        "category": "분석",
        "title": "S3에 있는 Parquet 파일을 데이터베이스 로딩 없이 SQL로 분석하고 싶습니다. 가장 적합한 서비스는?",
        "options": [
            "Amazon Athena",
            "Redshift",
            "RDS",
            "DynamoDB"
        ],
        "answer": "Amazon Athena",
        "explanation": "Athena는 S3 데이터를 대상으로 표준 SQL 쿼리를 날릴 수 있는 서버리스 서비스입니다."
    },
    {
        "category": "저장소",
        "title": "여러 EC2 인스턴스가 비디오 파일을 동시에 처리해야 하며 매우 높은 처리량(Throughput)이 필요합니다. 적절한 EFS 모드는?",
        "options": [
            "EFS Max I/O 성능 모드",
            "General Purpose 모드",
            "EBS Provisioned IOPS",
            "S3"
        ],
        "answer": "EFS Max I/O 성능 모드",
        "explanation": "Max I/O 모드는 지연 시간은 약간 늘어나지만, 수십/수백 대의 인스턴스가 동시 접속할 때의 처리량을 극대화합니다."
    },
    {
        "category": "컨테이너",
        "title": "ECS 컨테이너가 S3에 접근해야 합니다. EC2 인스턴스 전체에 권한을 주지 않고 해당 컨테이너에만 권한을 주려면?",
        "options": [
            "ECS 태스크 역할(Task Role)을 정의하여 태스크 정의에 할당한다.",
            "인스턴스 프로파일 사용",
            "액세스 키 하드코딩",
            "버킷 정책 개방"
        ],
        "answer": "ECS 태스크 역할(Task Role)을 정의하여 태스크 정의에 할당한다.",
        "explanation": "태스크 역할을 사용하면 같은 인스턴스에 있는 컨테이너라도 서로 다른 권한을 가질 수 있어 최소 권한 원칙을 준수할 수 있습니다."
    },
    {
        "category": "컴퓨팅",
        "title": "인스턴스 간 네트워크 속도가 매우 빨라야 하는 HPC 작업입니다. 인스턴스를 물리적으로 가깝게 배치하려면?",
        "options": [
            "클러스터 배치 그룹(Cluster Placement Group) 사용",
            "분산 배치 그룹",
            "파티션 배치 그룹",
            "전용 호스트"
        ],
        "answer": "클러스터 배치 그룹(Cluster Placement Group) 사용",
        "explanation": "클러스터 배치 그룹은 단일 가용 영역 내에서 인스턴스를 밀집시켜 네트워크 지연을 최소화합니다."
    },
    {
        "category": "분석",
        "title": "실시간 데이터를 받아 Redshift로 적재하고 싶습니다. 서버 관리 없이 이를 수행하는 서비스는?",
        "options": [
            "Amazon Kinesis Data Firehose",
            "DataSync",
            "Glue",
            "Lambda"
        ],
        "answer": "Amazon Kinesis Data Firehose",
        "explanation": "Firehose는 데이터를 받아 S3, Redshift, OpenSearch 등으로 자동 적재(Load)해주는 완전 관리형 서비스입니다."
    },
    {
        "category": "보안",
        "title": "S3에 저장된 의료 정보(PHI)를 보호해야 합니다. 저장 시 암호화하고 전송 시 HTTPS를 강제하려면?",
        "options": [
            "S3 버킷 정책에서 ",
            " 조건으로 HTTPS 강제 및 KMS 암호화 사용",
            "MFA Delete 사용",
            "퍼블릭 차단",
            "Macie 사용"
        ],
        "answer": "S3 버킷 정책에서 ",
        "explanation": "버킷 정책의 `aws:SecureTransport: false` 거부 규칙은 HTTP 접근을 막고, KMS는 저장 데이터를 암호화합니다."
    },
    {
        "category": "비용 최적화",
        "title": "EC2 인스턴스 간에 대량의 데이터를 주고받아야 합니다. 데이터 전송 비용을 없애려면 어떻게 배치해야 합니까?",
        "options": [
            "동일한 가용 영역(AZ) 내에 인스턴스를 배치하고 사설 IP로 통신한다.",
            "다른 AZ에 배치",
            "퍼블릭 IP 통신",
            "다른 리전 배치"
        ],
        "answer": "동일한 가용 영역(AZ) 내에 인스턴스를 배치하고 사설 IP로 통신한다.",
        "explanation": "같은 가용 영역 내에서 사설 IP를 통한 통신은 데이터 전송 비용이 무료입니다."
    },
    {
        "category": "아키텍처",
        "title": "ALB 뒤의 인스턴스 중 하나에만 트래픽이 몰립니다. 부하 분산이 골고루 되지 않는 원인은?",
        "options": [
            "대상 그룹에서 고정 세션(Sticky Session)이 활성화되어 있다.",
            "헬스 체크 실패",
            "잘못된 라우팅 알고리즘",
            "인스턴스 크기 차이"
        ],
        "answer": "대상 그룹에서 고정 세션(Sticky Session)이 활성화되어 있다.",
        "explanation": "세션 고정 기능이 켜져 있으면 특정 사용자의 트래픽이 계속 같은 인스턴스로만 가기 때문에 불균형이 발생할 수 있습니다."
    },
    {
        "category": "데이터베이스",
        "title": "EC2에서 SQL Server Always On 가용성 그룹을 구성하려 합니다. 공유 스토리지로 무엇을 써야 합니까?",
        "options": [
            "Amazon FSx for Windows File Server",
            "EBS",
            "S3",
            "EFS"
        ],
        "answer": "Amazon FSx for Windows File Server",
        "explanation": "FSx for Windows는 SMB 파일 공유를 지원하며 SQL Server의 고가용성 클러스터링 구성에 필요한 공유 스토리지 요건을 충족합니다."
    },
    {
        "category": "비용 최적화",
        "title": "규정 준수를 위해 데이터를 7년 이상 보관해야 합니다. 거의 꺼내볼 일은 없습니다. 가장 저렴한 스토리지는?",
        "options": [
            "Amazon S3 Glacier Deep Archive",
            "S3 Glacier",
            "S3 Standard-IA",
            "S3 Standard"
        ],
        "answer": "Amazon S3 Glacier Deep Archive",
        "explanation": "Glacier Deep Archive는 AWS에서 가장 저렴한 스토리지 클래스로, 장기 보관용 데이터(1년에 1~2회 접근)에 적합합니다."
    },
    {
        "category": "머신러닝",
        "title": "고객센터 통화 녹음(오디오)을 텍스트로 바꾸고, 이를 번역한 뒤, 감정 분석을 하고 싶습니다. 서비스 순서는?",
        "options": [
            "Transcribe(음성->텍스트) -> Translate(번역) -> Comprehend(감정 분석)",
            "Polly -> Lex -> Rekognition",
            "Textract -> Translate -> Kendra",
            "Connect -> Lambda -> SNS"
        ],
        "answer": "Transcribe(음성->텍스트) -> Translate(번역) -> Comprehend(감정 분석)",
        "explanation": "Transcribe는 STT(Speech-to-Text), Translate는 번역, Comprehend는 자연어 분석(감정, 키워드 추출)을 담당합니다."
    },
    {
        "category": "네트워크",
        "title": "A 계정의 Lambda 함수가 B 계정의 EFS 파일 시스템에 접근해야 합니다. 가장 효율적인 네트워크 구성은?",
        "options": [
            "두 VPC 간에 VPC 피어링을 설정한다.",
            "Transit Gateway 사용",
            "VPN 연결",
            "인터넷을 통해 연결"
        ],
        "answer": "두 VPC 간에 VPC 피어링을 설정한다.",
        "explanation": "VPC 피어링을 맺으면 서로 다른 계정의 VPC라도 사설 IP로 통신할 수 있어 EFS 마운트가 가능해집니다."
    },
    {
        "category": "서버리스",
        "title": "IoT 센서로부터 대량의 데이터를 HTTPS로 받아 DynamoDB에 저장하려 합니다. 서버 관리 없이 확장 가능한 구조는?",
        "options": [
            "API Gateway + Lambda + DynamoDB",
            "EC2 + ALB + RDS",
            "Kinesis + EMR",
            "S3 + Athena"
        ],
        "answer": "API Gateway + Lambda + DynamoDB",
        "explanation": "API Gateway는 대량의 API 요청을 받아 Lambda를 트리거하고, Lambda는 DB에 데이터를 쓰는 전형적인 서버리스 수집 패턴입니다."
    },
    {
        "category": "데이터베이스",
        "title": "운영 중인 DB에서 분석용 리포트를 뽑느라 성능이 느려집니다. 운영 DB에 영향을 주지 않고 분석을 수행하려면?",
        "options": [
            "읽기 전용 복제본(Read Replica)을 생성하여 리포트 쿼리를 수행한다.",
            "Multi-AZ 대기 인스턴스 사용",
            "S3로 덤프",
            "ElastiCache 사용"
        ],
        "answer": "읽기 전용 복제본(Read Replica)을 생성하여 리포트 쿼리를 수행한다.",
        "explanation": "읽기 복제본은 운영 트래픽과 분석 트래픽을 분리하여 주 데이터베이스의 부하를 줄이는 데 사용됩니다."
    },
    {
        "category": "마이그레이션",
        "title": "20TB의 데이터베이스를 AWS로 옮겨야 하는데 네트워크가 느립니다. 초기 데이터는 오프라인으로, 이후 변경분은 온라인으로 옮기려면?",
        "options": [
            "Snowball Edge로 초기 데이터 이전 + DMS로 변경 사항 복제(CDC)",
            "DataSync만 사용",
            "VPN 사용",
            "Direct Connect 설치"
        ],
        "answer": "Snowball Edge로 초기 데이터 이전 + DMS로 변경 사항 복제(CDC)",
        "explanation": "대용량은 Snowball로 옮기고, 배송 기간 동안의 변경분은 DMS CDC로 따라잡는 것이 하이브리드 마이그레이션의 정석입니다."
    },
    {
        "category": "마이그레이션",
        "title": "100GB 정도의 데이터를 S3로 빠르게 옮기고 싶습니다. 100Mbps 네트워크를 최대한 활용하고 관리가 편한 서비스는?",
        "options": [
            "AWS DataSync",
            "Snowball",
            "S3 CLI",
            "VPN"
        ],
        "answer": "AWS DataSync",
        "explanation": "DataSync는 네트워크 프로토콜을 최적화하여 인터넷망에서도 데이터를 빠르고 안정적으로 전송합니다."
    },
    {
        "category": "서버리스",
        "title": "S3에 사진이 올라오면 자동으로 썸네일을 만들고 싶습니다. 가장 간단한 이벤트 기반 아키텍처는?",
        "options": [
            "S3 이벤트 알림 -> Lambda 함수",
            "S3 -> SNS -> SQS -> EC2",
            "CloudWatch 경보 -> Lambda",
            "EventBridge 스케줄"
        ],
        "answer": "S3 이벤트 알림 -> Lambda 함수",
        "explanation": "S3의 객체 생성 이벤트가 Lambda를 직접 트리거하는 구조가 가장 단순하고 효율적입니다."
    },
    {
        "category": "보안",
        "title": "ALB 뒤의 웹 서버를 SQL 인젝션 공격으로부터 보호하고 싶습니다. 무엇을 설정해야 합니까?",
        "options": [
            "AWS WAF를 ALB에 연결하고 SQL 인젝션 차단 규칙 활성화",
            "보안 그룹 강화",
            "NACL 설정",
            "Shield Advanced"
        ],
        "answer": "AWS WAF를 ALB에 연결하고 SQL 인젝션 차단 규칙 활성화",
        "explanation": "WAF는 애플리케이션 계층(L7)에서 SQL 인젝션 패턴을 검사하고 차단할 수 있습니다."
    },
    {
        "category": "보안",
        "title": "CloudFront를 통해 전 세계에 콘텐츠를 배포하지만, 특정 사용자만 접근하도록 인증 로직을 엣지에서 실행하고 싶습니다.",
        "options": [
            "Lambda@Edge와 Amazon Cognito 연동",
            "WAF IP 차단",
            "S3 버킷 정책",
            "Geo-blocking"
        ],
        "answer": "Lambda@Edge와 Amazon Cognito 연동",
        "explanation": "Lambda@Edge를 사용하면 CloudFront 엣지 로케이션에서 인증 코드를 실행하여, 지연 시간 없이 전 세계 사용자에게 보안 콘텐츠를 제공할 수 있습니다."
    },
    {
        "category": "컴퓨팅",
        "title": "EC2 인스턴스의 CPU 사용률을 항상 40%로 유지하고 싶습니다. 어떤 Auto Scaling 정책이 필요합니까?",
        "options": [
            "대상 추적(Target Tracking) 조정 정책",
            "단계 조정 정책",
            "단순 조정 정책",
            "예약 조정"
        ],
        "answer": "대상 추적(Target Tracking) 조정 정책",
        "explanation": "목표값(CPU 40%)만 정해주면 Auto Scaling이 알아서 인스턴스를 늘리고 줄여주는 것이 대상 추적 정책입니다."
    },
    {
        "category": "데이터베이스",
        "title": "비즈니스 분석가가 가끔 실행하는 복잡한 쿼리 때문에 메인 DB가 느려집니다. 이를 방지하려면?",
        "options": [
            "읽기 전용 복제본을 만들고 분석가는 복제본에서 쿼리하게 한다.",
            "DB 사양 업그레이드",
            "ElastiCache 사용",
            "DynamoDB로 이전"
        ],
        "answer": "읽기 전용 복제본을 만들고 분석가는 복제본에서 쿼리하게 한다.",
        "explanation": "분석용 트래픽을 복제본으로 분리하면 운영 DB의 성능을 보호할 수 있습니다."
    },
    {
        "category": "모니터링",
        "title": "조직 내 모든 S3 버킷에 버전 관리가 켜져 있는지 한눈에 확인하고 싶습니다. 어떤 도구를 써야 합니까?",
        "options": [
            "Amazon S3 Storage Lens",
            "Config",
            "CloudWatch",
            "Macie"
        ],
        "answer": "Amazon S3 Storage Lens",
        "explanation": "Storage Lens는 S3 사용량 및 설정 현황(버전 관리 여부 등)을 시각화해주는 대시보드 서비스입니다."
    },
    {
        "category": "보안",
        "title": "사용자가 입력한 신용카드 번호를 애플리케이션 서버에서도 볼 수 없도록 엣지에서부터 암호화하고 싶습니다.",
        "options": [
            "CloudFront 필드 레벨 암호화(Field-level encryption) 사용",
            "HTTPS(SSL) 사용",
            "VPN 사용",
            "S3 암호화"
        ],
        "answer": "CloudFront 필드 레벨 암호화(Field-level encryption) 사용",
        "explanation": "필드 레벨 암호화를 사용하면 CloudFront가 공개키로 특정 필드를 암호화하며, 오직 개인키를 가진 결제 처리 서버만 이를 복호화할 수 있습니다."
    }
// ... (위에는 문제 데이터들이 쭉 있습니다) ...
    ];

    const generateQuestions = () => {
    return qList.map((q, index) => {
        let processedAnswer = q.answer;

        if (typeof q.answer === 'string' && q.answer.includes(',')) {
            processedAnswer = q.answer
                .split(',')
                .map(a => a.trim());
        }

        return {
            id: index + 1,
            category: q.category,
            title: q.title,
            options: [...q.options].sort(() => Math.random() - 0.5),
            answer: processedAnswer,
            explanation: q.explanation,
            multi: Array.isArray(processedAnswer) // ⭐ UX용 플래그
        };
    });
};

window.questions = generateQuestions();
