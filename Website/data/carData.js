var carData = [
  {
    brand: "porsche",
    logoImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Porsche_logo.svg/1200px-Porsche_logo.svg.png",
    mainImg:
      "https://files.porsche.com/filestore/image/multimedia/none/rd-2022-homepage-banner-ww-macaniiit-kw07/normal/219b9af8-899c-11ec-80e9-005056bbdc38;sN;twebp/porsche-normal.webp",
    models: [
      {
        name: "718",
        mainImg:
          "https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-718/small/57ad32c8-ca23-11ec-80ef-005056bbdc38;sM;twebp;c892;gc/porsche-small.webp",
        option1: [
          {color:"white",image:"https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KM8BGhQ5kpBgfNksH0DydkkT89trdikIuatBCr61vZouWGHSv6CRRY4WuemP3acIv10eSE4qDAslJAwd0zM5T%25d8elC2Km2TYsBgy1E8uJqBp0LHqkRYWy"},
          {color:"black",image:"https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBUM60KZhUWTQZzmaifsZZ1BDJksqZ8C4JUSko3PAYCvMmlPoSFFHnvCG%252E4O%25P3acIv10eSE4qDAslJAwd0zM5T%25d8elC2Km2TYsBgy1E8uJqBp0LHqkRYWy"},
          {color:"red",image:"https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBUM60KZhUWTQZzmaifsZZ1BDJksqZ8C4JUSko3PAYCvMmlPoSFFHnvCG%252E4O8P3ajmv10eSE4qDAslJAwd0zM5T%25d8elC2Km2TYsBgy1E8uJqBp0LHqkRYWy"},
          {color:"yellow",image:"https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBUM60KZhUWTQZzmaifsZZ1BDJksqZ8C4JUSko3PAYCvMmlPoSFFHnvCG%252E4O8P3aGldnw1Fj4qDAslJAwd0zM5T%25d8elC2Km2TYsBgy1E8uJqBp0LHqkRYWy"}
        ]      
      },
      {
        name: "911",
        mainImg:
          "https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-911/small/3cf76e8c-6694-11e9-80c4-005056bbdc38;sP;twebp;c1693;gc/porsche-small.webp",
        option1: [
          {color:"white",image:"https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KMIOlhQ5rsRgfNUAI0Dyo1cT89oCBikIvRtBCr4NzZou35ESv6aIrY4WoyhP3a6icnw1WhkEeqtI3UiscWwAB658elZaafRHocQdfcmNZ09Ik7NffxJLKZhKHMTcAovmnwibcBl9pbEzMRo"},
          {color:"black",image:"https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8xV60KkzFWTQeR8aifY3O1BDYSUqZ8PFJUSknQrAYCEKdlPo48kHnvYf62E4oqOcL3v6ZdGwJxEeqtI3UiscWwAB658elZaafRHocQdfcmNZ09Ik7NffxJLKZhKHMTcAovmnwibcBl9pbEzMRo"},
          {color:"red",image:"https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8xV60KkzFWTQeR8aifY3O1BDYSUqZ8PFJUSknQrAYCEKdlPo48kHnvYf62E4oqOcL3v6ZdGwJ8EeqzO3UiscWwAB658elZaafRHocQdfcmNZ09Ik7NffxJLKZhKHMTcAovmnwibcBl9pbEzMRo"},
          {color:"yellow",image:"https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8xV60KkzFWTQeR8aifY3O1BDYSUqZ8PFJUSknQrAYCEKdlPo48kHnvYf62E4oqOcL3v6ZdGwJ8EeqzOvLRUoKBGVAj7elZaafRHocQdfcmNZ09Ik7NffxJLKZhKHMTcAovmnwibcBl9pbEzMRo"}
        ]        
      },
      {
        name: "Taycan",
        mainImg:
          "https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-taycan/small/094d1c1c-bab0-11e9-80c4-005056bbdc38;sP;twebp;c1693;gc/porsche-small.webp",
        option1: [
          {color:"white",image:"https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KMIOlhQ5rsRgfNULH0DyAqAT89orKikIvRdBCr4NzZou35ESv6aIrY4W0XAP3aTvUnw1WBdEeqaCrLRUMKwABJ67elZWNkRHSaysV2Y11omcPBMvbdnAWGOtw5kNC5JrnZ6GbhW4Ygf%258ni8t9S5cwzJFmYp5Pd6DpX09Ow"},
          {color:"black",image:"https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8xV60KkzFWTQetmaifRwR1BDYkgqZ8PFsUSknQrAYCEKdlPo48kHnvaNR2E41PecL3vUsdGw4SktFepzLRUMKwABJ67elZWNkRHSaysV2Y11omcPBMvbdnAWGOtw5kNC5JrnZ6GbhW4Ygf%258ni8t9S5cwzJFmYp5Pd6DpX09Ow"},
          {color:"red",image:"https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9V7KMIOlhQ5rsRgfNULH0DyAqAT89orKikIvRdBCr4NzZou35ESv6aIrY4W0XAP3aTvUnw1WBdEeqaCrLRUMKwABJ67elZWNkRHSaysV2Y11omcPBMvbdnAWGOtw5kNC5JrnZ6GbhW4Ygf%258ni8t9S5cwzJFmYp5Pd6DpX09Ow"},
          {color:"blue",image:"https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8xV60KkzFWTQetmaifRwR1BDYkgqZ8PFsUSknQrAYCEKdlPo48kHnvaNR2E41PecL3vUsdGw4SktFepgLRU7ouGVAvQZFml4fzXbH33Y%25O2UpPjscRvMxJdkMOtw5kNC5JrnZ6GbhW4Ygf%258ni8t9S5cwzJFmYp5Pd6DpX09Ow"}
        ]
      }
    ]
  },
  {
    brand: "lamborghini",
    logoImg:
      "https://1000logos.net/wp-content/uploads/2018/03/Lamborghini-logo.png",
    mainImg:
      "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian-fkp-37/2022/06_20/gallery/sian_05_m.jpg",
    models: [
      {
        name: "Huracan",
        mainImg:
          "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_540,q_auto:good,w_960/cms/uploads/qwmdf55c8dgppu3ek554",
        option1: [
          {color:"black",image:"https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2Vy87cNBSAp61aKiRaAUKIF_iFhMRxbpNk8Qu16g4WSCAWdFEdx3biseMkviQzeaa-ERseoKy6YYPEyQ-SdT6dq-0Tn5n3f52eJn968vbt6x__-earvv-jfnw6XefT6fSI7I_fvn7_8eu_nz3_9c__zc-G09OYPJ8eUcjvjz_VI_YSLrPsP_vw4cPL0ydkPj05nV4Sns9H0OnFi-TtjB7H7zs_ze7zb7NCMiWEKOuqzSrV8qJDzHjZFrxCXnXduSy6HMsvTqenH9Fa6DqXQRnbTEgGOcsLyMrvFsZbqM7ftS0gJskQkE_noST4bCZNinofCJ7NNaAaUp8B9mPdkU_zMnFAwzNJCSYUO8H2iywA57kPDNCrkbKDPF8loZdItmCr0BN85TfCjRkyRsyuVDmJdqPKKWCTAHfcd5LiQcoHOVI9jvHCOHA6qULgcihHBtxyziTwactCBjwiW0fgm2gjaTtSWofukMLXC0I3YD7UBL9cGHRT17EDDxEz6kjKzHXKCUJvpHlO-3d-VhSwrblgIBDzUBBkPjqCL8JhTFRCSF3Q0YQ0PVUSig6agZg8uaTYarQg9VDFjmCWlhNsPWaEtDQK5KidJ20e6msOCgVTBhTvKFt1_0n9IJObQMl0pq4qi2fbE0LblaC8UZcMVOBpIMTj-moNNX08tWm6iHpordqHB3l5kEHR5-_FWGxn6KVr-gH64QjrzcBuB1Z2IYxTjA30TpWJQe-xiTkhrt2BtULyhbnPDAzC0r6DDNWlhEEjcxVhPLsFBoMtUkTYGnkD7UJiHSGWFKJ9KO0ZDEpmkOBNs4HhK6MOGbuzWwHGLyxRiA8Z5mACVh35gi76Q0vmMKbBGIrch_NM2r6etwIsdpXJCUbxGizf6Ha2m5eFgZVomSW4zDVglVrpWVqNTU_wmM-KsOKagQ2y8RJsTMWAYNNYDxzs5huqMqJwdMwRw5mmYBRB0dMcFbYLGQfhEEZtCtHAeNn1jWwmNTQ11FLhKN7z1jJwuNZLDk6GhoZhEtFR5RnHfj7D3MW2NTD7oHwLS0Ikn0fR5Ykw6cYRUntB8N0kfUEI9BG8MDV1w9OzyyuCz_oGvFLXK_gQmcwIa7FwCIguZYSUmwCB-yYgIdLJg9SHVCE3FNCbdq4gPNwpaO5yT5CFbAhDSS8y6LUSh29ntoNgYnUjo5WNOkMYUa2kOawtJbihoV4E58NROdiSH5hZtUOIouY5QeU0pyFej-3WSR0bUMuvhN3nR-U9MfJFs5Y6hzj3LWcEy4sKoleVKCGG2dE4RrqpDRBXuawNxM1mq4N4mzN5Jez5XsHKTUaR6xSWTMAa13a_wsaQFmzoJT2lrTumedOupqnfQih7DrdzRgtu3UwL9g5pwU5PgCZ917Lcxx-kW7Wnnxnp4v0vMQk9vfsJRz75ftBO321axOE-a3N2N0jdD_E-Yw27QzsPeB99kncdjtLj_avffs7fvHv1Ln_HWHGHjv5Dop5cuH-DN3skfvmEQv4FS_p7fJsGAAA.jpg?viewPort=1280,945,fill"},
          {color:"blue",image:"https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2Vy87cNBSAp61aKiRaAUKIF_iFhMRx7sniF2rVHSyQQCzoojq-JR47TsZ2kpk8U9-IDQ9QVt2wQeLkB8k6n87V9onPzPu_Tk-XcHry9u3rH__55qu-_6N5fDpd59Pp9Ijsj9--fv_x67-fPf_1z__Nz4bT07QEPj2ikN8ff2pG7BWcZ9V_9uHDh5enT8h8enI6vSQ8n4-g04sXS3AzBhy_F2Ga_effZlKJpuWizivBs1IzUZZ1XXGVtbrMu1yjrBln8ovT6elHdA6E8BmUqaNEBjnLC8jK72xta6jq77oOEBfFEJBP9VASQjaTpmSzD4TA5gZQD0ufAfZjI8hneLlwQMszRQk2FjvB9RdVAM5zHxlg0CNlR1VfFaFXSLboqtgTQhU2wo1ZMibMrlR5kd1GlZeI7QK4476TlA9SPciR6nFMZ8aB00k1AldDOTLgjnOmgE9bFjPgCdk6At9kl0jbkdIE-kPK0FwQxID50BDC5cxATEKwAw8RM5pEyszNkhOk2UgLnPYXYdYUsK25ZCAR81gQVD56QijiYVyohFSmoKNJZXuqJDUdNAM5BXIpuTXoQJmhSoJgLx0nuGbMCMul1aBG4wNp89Bcc6APybQFzQVla_GfNA9y8RNotdTUVe2wdj0hdqIEHaw-Z6AjXwZCOq6v19jQx9OboYvoh9bqfXiQ5wcZNX3-Xo7FVkOvfNsP0A9HWG8HdjuwsjNhnFJqofe6XBj0AduUE9IqDqwVki_OfWZhkI72HVSsziUMBpmvCGPtLzBY7JAi4taqGxgfFyYIqaQQE2LparComEVCsO0Glq-MOmTdzm4F2HBhC4WEmGEONmIlyBdN0R_aYg_jMlhLkftQz6Tta70V4FBUNidYzRtwfKPbOTFfLgycQsccwWe-Baf1Ss_SGWx7QsB81oQV1wxcVG1Q4NJSDAhuGZuBg9tCS1VGlJ6OOWKsaQpGGTU9zVFjdyHjID3CaGwhWxjPu7mRzS4tTQ21VHqKD7xzDDyuzSUHr2JLwzDJ5KnyjGM_1zCL1HUW5hB16OCyIJIvoBT5QphM6wlLd0YIYlKhIET6CEHahroR6NnlFSFkfQtB6-sVQkxMZYS1uHCIiH7JCEtuI0Qe2oiERCePyhxSx9xSQG-7uYL4cKdouM8DQRWqJQwlvcho1koevp05AdGm6kZGp1pdQxxRr6R5bBwl-KGlXkQfYi4hRldy0uLMqh1ikg3PCTqnOY3pemy3TvrYgFp-JewhPyrvCyNfsmtpckhz33FGcLyoIAVdyRJSnD2NY6KbughpVZe1hbS5bPWQbnOmroQ93ytYuc0ocp3iJZOwprXbr7AxpAUbBkVPaRPHNG_GNzT1W4xlz-FWZ7TgJmZasAukBTs9AZr03ahyH39QfjWBfmaUT_e_pEWa6d1POPIp9IPx5m4zMg33WZezu0GZfkj3GWvZHbp5wPsUFnUncFQB71_99nP-5t2rd_k7xoo79PQfkszk4_0bvLkj8csnFPIv99vmkZsGAAA.jpg?viewPort=1280,945,fill"},
          {color:"orange",image:"https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2Vz87cNBDAt61aKiRaAUKIF_iEhMQ4TrJJDp9Qq97ggATiQA_VOLaTrB0n8Z9kN8_UN-LCA5RTL1yQmHwgWfPT_LU98ey-_-v0NPnTk7dvX__4zzdfdd0f1ePT6TqfTqdHZH_89vX7j1___ez5r3_-b37Wn57G5MX0iEJ-f_zpMGKn4DKr7rMPHz68PH1C5tOT0-kl4fl8BJ1evEjezuhx_L710-w-_7aua5nVWSm4OpdcMFk3QhdlXlRtobkUvOFcZ1X1xen09CNaC23rMihik0nFgDOeQ1Z8tzBbQHn-rmkAMSmGgGI69wXBZzNpSlZ7T_BsrgB1n7oMsBurlnyDKJIANCJTlGBCvhNst6gccJ67wAC9Hik7qPNVETqFZAu2DB3Bl34j3JghY8TsSpWTbDaqnALWCXDHfScpH6R6kCPVExgvTICgk2oEofpiZCCsEEyBmLYsZCAisnUEsckmkrYjpbXoDil9tSC0PfK-IvjlwqCd2pYdeIiYcYikzGJInCCHjTQvaP_Wz5oCtpVLBhKRh5yg-OgIPg-HMVEJqYacjiaV6aiS1HTQDOTkyaXkVqEFNfRlbAlmaQTBVmNGSEutQY2D86TNfXXloFEybUCLlrJ1-58cHmRyE2iVztRVbfFsO0Jo2gK0N_qSgQ4i9YR4XF-voaKPp7eBLqIfWqv3_kFeHmTQ9Pk7OebbGTrl6q6Hrj_COtOz24GVXQjjFGMNndNFYtB5rCMnxLU9sJZIvjB3mYFeWtq3V6G8FNAPyFxJGM9ugd5ggxQRtlrdYHAhsZYQCwoZfCjsGQwqZpDgTb2BESujDhm7s1sOxi8sUYgPGXIwAcuWfGHIu0NL5jCm3hiK3PvzTNq-nrccLLal4QSjRQVWbHQ7287LwsAqtMwSXOZqsFqv9CztgHVH8MhnTVhxzcAGVXsFNqa8R7BprHoBdvM1VRlROjrmiOFMUzDKoOlpjhqbhYy9dAjjYHJZw3jZhxvZTKppaqil0lG8F41l4HCtFg5OhZqGYZLRUeUZx24-w9zGpjEw-6B9A0tCJJ9H2fJEmIbaEVJzQfDtpHxOCPQRvDQVdcPTs-MlwWddDV7r6xV8iExlhDVfBARElzJC4iZAEL4OSIh08qCGQ-rADQV0pplLCA93CoNw3BNUrmpCX9CLDMNaysO3M9tCMLG8kdGqWp8hjKhX0hxWlhJcX1MvgvPhqBxsIQ7MrNwhRFkJTtCc5jTE67HdOuljA2r5lbB7flTeEyNfNGsxcIhz1whGsCIvIXpdygJimB2NY6Sb2gBxVctaQ9xstjqItzlTV8LO9xJWYTKKXKewZBLWuDb7FTaGtGBDr-gpbe0xzdvgKpr6LYSiE3A7Z7Tg1s60YG-RFuz0BGjS90EV-_iDcuvg6WdGuXj_S0xymN79hKOYfNcPbrjbBhn7-6zh7K5XQ9fH-4zV7A7t3ON99EndtTgqj_evfvuZv3n36h1_x1h-h47-Q-IwuXD_Bm_2SPzyCYX8C71eumKbBgAA.jpg?viewPort=1280,945,fill"},
          {color:"white",image:"https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2Vy87cNBSAp61aKiRaAUKIF_iFhMRx7sniF2rVHSyQQCzoojqO7cRjx8n4kszkmfpGbHiAsuqGDRInP0jW-XSutk98Zt7_dXqa_OnJ27evf_znm6-G4Y_m8el0XU6n0yOyP377-v3Hr_9-9vzXP_83PxtPT2PyfH5EIb8__lRPOEg4L3L47MOHDy9Pn5D59OR0ekl4vhxBpxcvkrcLepy-7_28uM-_rYoua3tR5Jkoi7wsOln2Xa9k1bZKFlldV2XW1B3_4nR6-hGthb53GZSxy4RkkLO8gKz8Lnaxg6r-rusAMUmGgHyux5Lgs4U0KZp9JHi2NIBqTEMGOExNTz7Ny8QBDc8kJZhQ7AQ7XGQBuCxDYIBeTZQdZH2VhEEi2YKtwkDwld8IN2bIGDG7UuUkuo0qp4BtAtxx30mKBykf5ET1OMYz48DppAqBy7GcGHDLOZPA5y0LGfCIbJ2Ab6KLpO1IaT26QwrfXBD6EfOxIfjLmUE_9z078BCxoI6kLFynnCD0RprntH_vF0UB25oLBgIxDwVB5pMj-CIcxkQlhNQFHU1IM1AloeigGYjZk0uKrUELUo9V7Anm0nGCbaaMkC6tAjlp50lbxuaag0LBlAHFe8pW_X9SP8jkZlAy1dRVZbG2AyF0fQnKG3XOQAWeRkI8rq_W0NDHU5umi6iH1qp9fJDnBxkUff5BTMVWwyBdO4wwjEfYYEZ2O7CyM2GaY2xhcKpMDAaPbcwJce0PrBWSLyxDZmAUlvYdZajOJYwamasIU-0uMBrskCLC1sobaBcS6wmxpBDtQ2lrMCiZQYI37QaGr4w6ZOzObgUYf2GJQnzIMAcTsOrJF3QxHFoyhzGNxlDkPtYLaftabwVY7CuTE4ziDVi-0e1sv1wuDKxEyyzBZa4Fq9RKz9JqbAeCx3xRhBXXDGyQrZdgYypGBJumZuRgN99SlQmFo2NOGGqagkkERU9zUthdyDgKhzBpU4gWpvOub2QzqaWpoZYKR_Ged5aBw7W55OBkaGkYZhEdVV5wGpYalj52nYHFB-U7uCRE8nkUfZ4Is24dIXVnBN_P0heEQB_BC9NQNzw9u7wi-GxowSt1vYIPkcmMsBYXDgHRpYyQchMgcN8GJEQ6eZD6kCrkhgIG0y0VhIc7Bc1d7gmykC1hLOlFBr1W4vDtzPYQTKxuZLSyVTWECdVKmsPGUoIbW-pFcD7kAkKwJSctLKzaIUTR8JygcprTEK_Hduusjg2o5VfC7vOj8p4Y-aJZS51DXIaOM4LlRQXRq0qUEMPiaBwj3dQGiKu8rC3EzWarg3hbMnkl7PlewcpNRpHrHC6ZgDWu3X6FjSEt2NBLekpbf0zzpl1DU7-FUA4cbnVGC279Qgv2HmnBTk-AJn3XstynH6RbtaefGeni_S8xCT2_-wknPvth1E7fbVrE8T7rcnY3Sj2M8T5jLbtDu4x4H32Sdz1O0uP9q99-zt-8e_Uuf8dYcYeO_kOinl24f4M3eyR--YRC_gVglfNrmwYAAA.jpg?viewPort=1280,945,fill"}
        ]
      },
      {
        name: "Urus",
        mainImg:
          "https://car-images.bauersecure.com/wp-images/153762/uruss_050.jpg",
        option1: [
          {color:"white",image:"https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2VzY4tNxHHT-5VSIREIkAI5QVGSJEo93f3YoQSZQcLJBAL7uKq3G27fez-OLa7e6afKW_EJg9wWbFhg8S_B6Sj-qnKVeVyldvnx3_ePt_C7f2HD9__8T_f_MaYfzTvbreX9Xa7fQb7uw_f__iv3_77Z1_-9af_m7_Ybp-nLcjlM7j8_d3P7cRG0X1V5hefPn36-vYFzLf3t9vXwJfr5XT76qst-JUDT7_vw7LOv_xdoxpZcFcOjRKiaVSuikpywbosu2LIqkrohmVT_gr73dh76vs5o9MXWcMZ5SIvKCu_TV3qqKq_7Tpi3pRgYrnUowBCtkJTQ5Y2IIi1JjZTM0EzUZSOeNyzAZ5Wlpsk9uahoM2yNoiLqn7xgFEMY_RVNMBkpksLVTiAV-GgbUN39EDkFqmPvXYt8cnnCTm8SfUmx2mEdG9ygpQ8Zs4C6Z4zsGenJInqdSBp3PwqSHopcSS5yGJywJHFjGRisU8kT0aSnudLDkczVNSPnI8ZECzO1S99Ly68eaxsE5ZWabcLvd1LYLBHQX2QKLAP6-V37DliB1b5JIFQxEvbsDQoW2gGnEGmQaNQwOrstaZhCZdH2PNkSEmZm5IUiuI7KTtWkwfco5OAb6YM2B4t1iY7B2jr2LzkpKJtUI6KcdMtkMyZk-ZBaE1a9thA9_-TVzlabTVGo_WRrQ1pE3cPbTx2VKV9bF1JOth8rwCn73CJchuRMF1903tsDBwPi6Prk2eGlG9yfLNEjcYbpbsggLkzFZnxijRuFK93YBf3mcy0pGwiE7hNBZD2PicTV5MZGtkYbDgOHmGjitU9o9GymCtgqucZiMWsaHTcMRCP1iYat8FhzHaOWzUAqZwF2RBLX5NjJRwDwVUX4sNl5KSsYwR2MVXk_CleC3LT-ggdEEvM0y2TkTmwV6cmF6YMrXXhITashZgxtMhVj2TRFgbGuLnLuJna9cDoHHKeY73CeO415uS5r9Bkz04jtZdjYQbgwGF9P6OJvl8fD0F-GOb7hUXhLnnFXnhgfpwNecstxuBdzJHYL6FZoQXO1wDsvMMYVRsmIOY9AtJWjJL8NjWjIn-E9lHQxLFWwBA1Ps9JcxdbmsYB45ysK4aapvtpcU0nt7VnSdPC9iUD0tAONPPebIYW-dC4QcuQZhS9zF75glaeDCpa-9R1jlbDOgl6bMxwCTyUrQQW2yZg6-5MoV9UKICINoTBNWhbUNaKHPA77lRQITMtBa3RohCTUFiKe_GQFJkrVQOyfCmBTWCsUYY2OiDhOLEPGm9OHMZSNRSVxS5Rxxy7ROO6taL4duxo5ZwHQBXrDIwlI6E9he8pOr7j9NHrK3jmxrfA2L7CtswVXr24bKgtrltz2cJYWxQVxxI3IUZfShQQV1HBJYYCz1RM_eWfdH6_lGTe8HKl3xfNKApzeoHtODu8yfHcxCwpDZwfgpJR9X2g5PZS15RW0yF_Wr0sKkpBV0MLHEXPlOI6o_1pV48dxsNn-x3Ysojw1zPHfdqly-CyL_GRDbSnvTsVHYLxo4ODwn5Hfz1VR2T87wCxNJpOGfKD6ewZPzpxi9JAp1XlCbi9kA2dMYrQ05nCjm_63MZuEn9Q824D3lc1p-e_pG2wy8c_8SSXYEY726fDDml8zrpcPI3KmjE9Z6IVT-zXkZ9T2NRTz5MK_Pzd3_6c__Dxu4_5RyGKJ57xh5rsMsfnH_jVX4G_fg-X_wL92kX7qAcAAA.jpg?viewPort=1280,945,fill"},
          {color:"rgba(234,100,65,255)",image:"https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2VzY4tNxHHT-5VSIREIkAI5QVGSJEo93f3YoQSZQcLJBAL7uKq3G27fez-OLa7e6afKW_EJg9wWbFhg8S_B6Sj-qnKVeVyldvnx3_ePt_C7f2HD9__8T_f_MaYfzTvbreX9Xa7fQb7uw_f__iv3_77Z1_-9af_m7_Ybp-nLcjlM7j8_d3P7cRG0X1V5hefPn36-vYFzLf3t9vXwJfr5XT76qst-JUDT7_vw7LOv_xd2eRlrVVTqKZpupLzqim6epDtoAZRVDVnbSHbpvoV9rux99T3c0anL7KGM8pFXlBWfvsQQ0VV_W3XEfOmBBPLpR4FELIVmhqytAFBrDWxmZoJmomidMTjng3wtLLcJLE3DwVtlrVBXFT1iweMYhijr6IBJjNdWqjCAbwKB20buqMHIrdIfey1a4lPPk_I4U2qNzlOI6R7kxOk5DFzFkj3nIE9OyVJVK8DSePmV0HSS4kjyUUWkwOOLGYkE4t9InkykvQ8X3I4GvShHzkfMyBYnKtf-l5cePNY2SYsrdJuF3q7l8Bgj4L6IFFgH9bL79hzxA6s8kkCoYiXtmFpULbQDDiDTINGoYDV2WtNwxIuj7DnyZCSMjclKRTFd1J2rCYPuEcnAd9MGbA9WqxNdg7Q1rF5yUlF26AcFeOmWyCZMyfNg9CatOyxge7_J69ytNpqjEbrI1sb0ibuHtp47KhK-9i6knSw-V4BTt_hEuU2ImG6-qb32Bg4HhZH1yfPDCnf5PhmiRqNN0p3QQBzZyoy4xVp3Che78Au7jOZaUnZRCZwmwog7X1OJq4mMzSyMdhwHDzCRhWre0ajZTFXwFTPMxCLWdHouGMgHq1NNG6Dw5jtHLdqAFI5C7Ihlr4mx0o4BoKrLsSHy8hJWccI7GKqyPlTvBbkpvUROiCWmKdbJiNzYK9OTS5MGVrrwkNsWAsxY2iRqx7Joi0MjHFzl3EzteuB0TnkPMd6hfHca8zJc1-hyZ6dRmovx8IMwIHD-n5GE32_Ph6C_DDM9wuLwl3yir3wwPw4G_KWW4zBu5gjsV9Cs0ILnK8B2HmHMao2TEDMewSkrRgl-W1qRkX-CO2joIljrYAhanyek-YutjSNA8Y5WVcMNU330-KaTm5rz5Kmhe1LBqShHWjmvdkMLfKhcYOWIc0oepm98gWtPBlUtPap6xythnUS9NiY4RJ4KFsJLLZNwNbdmUK_qFAAEW0Ig2vQtqCsFTngd9ypoEJmWgpao0UhJqGwFPfiISkyV6oGZPlSApvAWKMMbXRAwnFiHzTenDiMpWooKotdoo45donGdWtF8e3Y0co5D4Aq1hkYS0ZCewrfU3R8x-mj11fwzI1vgbF9hW2ZK7x6cdlQW1y35rKFsbYoKo4lbkKMvpQoIK4CFzDGUOCZiqm__JPO75eSzBtervT7ohlFYU4vsB1nhzc5npuYJaWB80NQMqq-D5TcXuqa0mo65E-rl0VFKehqaIGj6JlSXGe0P-3qscN4-Gy_A1sWEf565rhPu3QZXPYlPrKB9rR3p6JDMH50cFDY7-ivp-qI3OC1P2IsjaZThvxgOnvGj07cojTQaVV5Am4vZENnjCL0dKaw45s-t7GbxB_UvNuA91XN6fkvaRvs8vFPPMklmNHO9umwQxqfsy4XT6OyZkzPmWjFE_t15OcUNvXU86QCP3_3tz_nP3z87mP-UYjiiWf8oSa7zPH5B371V-Cv38Plv-4kX5eoBwAA.jpg?viewPort=1280,945,fill"},
          {color:"blue",image:"https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2Vy6ottxGGl8_BsQnEJgkh-AU2AUOq75fBJth4lgwCCRnkDA6l1qW1pL4sSd29dz-T3ygTP8DJKJNMAvl7J7CojypVlUpVaq0f_3n7fAu39x8-fP_H_3zzG2P-0b673V7W2-32GezvPnz_479----fffnXn_5v_mK7fZ62IJbP4PL3dz-3ExtF91WZX3z69Onr2xcw397fbl8DX66X0-2rr7bgVw48_X4Iyzr_8nddzYUUTde19VDnbTPUVVU0leqKoq1U3zX10Gkpm19hvxt7T8Mw53T6Mm85pyIrSsqrb1Wveqqbb_uemDeVMbFYmjEDQr5CUzJPGxCytSE2UztBMzGrHPG45xKeVlSbIPbmoaDNojGIi6p58YBRDGP0dTTAZKZLC3U4gNfMQdtkfwxA5A6pj71xHfHJ5wkp36R6k-M0Qro3OUEKHnNngXQvGNjzU5BA9TqQMG5-zUh4IXAksYhycsCRx5xE4myfSJyMJAPPl5RHK2saRi7GHAgW5xqWYcguvHmsbBOWVmG3C4PdK0Dao6QhCBQ4hPXyO_YCsZJVMQkglPHSNixJZUvNgDPIJDUKBazOXxuSS7g8wl4kQ0qIwlSkUBTfSdmxnjzgHr0AfDvlwPbosDbZOUBbx_alIBVti3JUjJvugGTOgjTLTGvSYsAGevifvMrRamswGq2PfG1Jm7h7aOOxoyrtY-cq0sEWew04fYdLFNuIhOnqm95ja-B4WBxdnzwzpHiT45slajTeKN2HDJh7U5MZr0jjxuz1DuzZfSYzLSmfyATuUgmkfSjIxNXkhkY2BhuO0iNsVLG-5zRazuYamJp5BmI5Kxod9wzEo7OJxk06jNnOcaslkKo5Ixti5RtyrDLHQHD1hfhwOTkhmhiBPZtqcv7MXkty0_oIPRArzNMtkxEFsNenJhemHK114ZFtWAsxZ2iR6wHJoi0NjHFzl3EzjRuA0TnkPMdmhfHcG8zJ81CjyZ6dRmovxtJI4MBh_TCjiX5YH4-MvJTz_cKicJe8Yp95YH6cLXnLHcbgXSyQ2C-hXaEFLtYA7LzDGFUXJiAWAwLSVo6C_Da1oyJ_hO5R0sSxUYCMGp_npLmPHU2jxDgn60rZ0HQ_La7p5LburGha2L7kQJKdpJn3djO0iIfGDVpkmlH0MnvlS1p5MqhoHVLfO1oN65TRY2OGS2BZdQJYbJeArb8zhWFRoQQi2hCka9G2oKzNCsDvuFNBhdx0FLRGi0JMmcJS3MuHoMhcqwYQ1UsFbBnGGkXoogMSjhOHoPHmRDlWqqWoLHaJOhbYJRrXrzXFt2NHK-YiAKpcZ2CsGAntmfmBouM7Th-9voJnbn0HjN0rbMtc49WLy4ba4rq1ly2MjUVRcaxwE2L0lUABcc1wAWMMJZ6pmIbLP-nifinJvOHlSr8vmlEU5vQC23H2eJPjuWWzoCS5ODJKRjV3ScntlW4oraZH_rR6UdaUgq5lBxzlwJTiOqP9aVePHcbD5_sd2PKI8NezwH3ahcvhsi_xkUva096fio6M8aODg8J-x3A9VUfkFq_9EWNlNJ0iFAfTOTB-dOIWJUmnVdUJuL0ULZ0xZmGgM4Ud3_S5jf2U_UHNuw14X9Wcnv-SNmmXj3_iSSzBjHa2T4eVaXzO-yJ7GpU1Y3rOsy57Yr-O_JzCpp4GnlTg5-_-9ufih4_ffSw-Zln5xDP-UJNd5vj8A7_6K_DX7-HyX00dOMSoBwAA.jpg?viewPort=1280,945,fill"},
          {color:"rgba(45,135,167,255)",image:"https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2VzY4tNxHHT-5VSIREIkAI5QVGSJEo93f3YoQSZQcLJBAL7uKq3Ha7fez-OLa7e6afKW_EJg9wWbFhg8S_B6Sj-qnKVeVyudrnx3_ePt_C7f2HD9__8T_f_MaYfzTvbreX9Xa7fQb7uw_f__iv3_77Z1_-9af_m7_Ybp-nLcjlM7j8_d3P7cRG033V5hefPn36-vYFzLf3t9vXwJfr5XT76qst-JUDT7_vw7LOv_xd1smirypRKlE3irNMF00OtWmLvOwykXEhu1KrX2G_G3tPfT9ndPoiazijXOQFZeW3DzHlVNXfdh0xb1owsVzqUQAhW6FplaUNCGKtic3UTNBMFKUjHvdMwdPKcpPE3jw0tFnWBnFR1y8eMJphjL6KBpjMdGmhCgfwKhy0TXVHD0RukfrYa9cSn3yekOpN6jc5TiOke5MTpOQxcxZI95yBPTslSVQ_BJLGza-CpJcSR5KLLCYHHFnMSCYW-0TyZCTpeb6kOhpVUT9yPmZAsDhXv_S9uPDmsbJNWFql3S70di8BZY-C-iBRYB_Wy-_Yc8Qq1vkkgVDES9uwpLQtBgacQSY1oFDADtlrTWoJl0fY82RIS5mbkjSK4jtpO1aTB9yjk4BvpgzYHi3WJjsHaOvYvOSko21Qjo5xG1ogmTOngZUYBhpkjw2G_n_yKmfQW42rGYYjWxsaTNw9tPHYUdXgY-tKGoLN9wpwwx0uUW4jEqarb8MeGwPHw-Low8kzQ8o3Ob5Z4oDGGz10QQBzZyoy4xVp3Che78Au7jOZaUnZRCZwmwog7X1OJq4mMzSyMdhwVB5ho47VPaPRspgrYKrnGYjFrGl03DEQj9YmGjflcM12jlulgFTOgmyIpa_JsRaOgeCqC_HhMnJS1jECu5gqcv4UrwW5aX2EDoj4wMgtk5E5sFfnQC5MGVrrwkNsWAsxY2iRqx7Joi0MjHFzl3EzteuB0TnkPMd6hfHca9yT575Ckz27Aam9HAujgAOH9f2MJvp-fTwEeaXm-4VFY5a8Zi88MD_OhrzlFtfgXcyR2C-hWaEFztcA7LzDGHUbJiDmPQLSVoyS_DY1oyZ_hPZR0MSx1oCKAz7PaeAutjSNCtc5WVeomqb7aTGmk9vas6RpYfuSAUm1imbem83QIh8DJmhRaUbRy-y1L2jlyaCitU9d52g1PCRBj40ZLoFV2UpgsW0Ctu7OFPpFhwKIaENQrkHbgrZW5IDfMVNBh8y0FIYBLQoxCY2luBcPSZG50jUgy5cS2ASuNcrQRgckHCf2YcCbE9VY6oaittglDjHHLtG4bq0ovh07WjnnAdDFOgNjyUhoT-F7io7vOH30wxU8c-NbYGxfYVvmCq9eXDbUFtetuWxhrC2KimOJSYjRlxIFxFVgAGMMBZ6pmPrLPw35_VKSecPLlX5fBkZRuKcX2I6zw5scz03MkpLi_BCUjK7vipLby6GmtJoO-dPqZVFRCkOlWuAoeqYU1xntT7t-7DAePtvvwJZFhL-eOeZply6Dy77ER6ZoT3t3ajoE40cHB439jv56qo7IDV77I8bSDHTKkB9MZ8_40YkpSopOq8sTcHshGzpjFKGnM4Ud3_S5jd0k_qDn3Qa8r3pOz39Jm7LLxz_xJJdgRjvbp8OqND5nXS6eRm3NmJ4z0Yon9uvIzyls-qnnSQd-_u5vf85_-Pjdx_yjEMUTz_hDTXaZ4_MP_OqvwF-_h8t_AQ9WHyKoBwAA.jpg?viewPort=1280,945,fill"}
        ]
      },
      
    ]
  },
  {
    brand: "benz",
    logoImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mercedes_Benz_Logo_11.jpg/1200px-Mercedes_Benz_Logo_11.jpg",
    mainImg:
      "https://www.mercedes-benz.com/en/vehicles/passenger-cars/concept-cars/_jcr_content/image/MQ6-12-image-20200908114040/00-mercedes-benz-eq-concept-cars-2560x1440.jpeg",
    models: [
      {
        name: "AMG SL 63 Roadster",
        mainImg:
          "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2022/oem/2022_mercedes-benz_sl-class_convertible_amg-sl-55_fq_oem_1_815.jpg",
        option1: [
          {color:"rgba(209,167,49,255)",image:"https://nafta.starconnect-ce.i.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZUOBZbMw3SGtlaMtsd2HdcUfpOyXGEuTRJ0lVYrOB2qB5bApRTyI5uGoYQC30MQkzNBUum7jAymhKV5pV%25vq4tTyLRgLFYaxPrqrH1GBfn8w0TfoiZKbYM4Fv4lTg9LxZ6PDaSbSeWHthtsd8BQcUfiA1XGE5YrJbXSqxVc4n8wzhfoiZCqGM4FN8cTg9Pze6PDecNSeWswhtsdUcDcUaqKDTb32VXq0Y3If3f%25XEd9BBpxb1loE1JnwxV4V%25d%25CWLH59zW0uBgGgHaxPKL1I&&BKGND=15&IMGT=A27&POV=be040%2Cpzm&crop=640,130,1280,930&width=1440&height=600"},
          {color:"black",image:"https://nafta.starconnect-ce.i.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtlaMtsd2HdcUfpOyXGEuTRJ0lVYrOB2qB5bApRTyI5uGoYQC30MQkzNBUum7jAymhKV5pV%25vq4tTyLRgLFYaxPrqrH1GBfn8w0TfoiZKbYM4Fv4lTg9LxZ6PDaSbSeWHthtsd8BQcUfiA1XGE5YrJbXSqxVc4n8wzhfoiZCqGM4FN8cTg9Pze6PDecNSeWswhtsdUcDcUaqKDTb32VXq0Y3If3f%25XEd9BBpxb1loE1JnwxV4V%25d%25CWLH59zW0uBgGgHaxPKL1I&&BKGND=15&IMGT=A27&POV=be040%2Cpzm&crop=640,130,1280,930&width=1440&height=600"},
          {color:"silver",image:"https://nafta.starconnect-ce.i.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZUnRZbMw3SGtlaMtsd2HdcUfpOyXGEuTRJ0lVYrOB2qB5bApRTyI5uGoYQC30MQkzNBUum7jAymhKV5pV%25vq4tTyLRgLFYaxPrqrH1GBfn8w0TfoiZKbYM4Fv4lTg9LxZ6PDaSbSeWHthtsd8BQcUfiA1XGE5YrJbXSqxVc4n8wzhfoiZCqGM4FN8cTg9Pze6PDecNSeWswhtsdUcDcUaqKDTb32VXq0Y3If3f%25XEd9BBpxb1loE1JnwxV4V%25d%25CWLH59zW0uBgGgHaxPKL1I&&BKGND=15&IMGT=A27&POV=be040%2Cpzm&crop=640,130,1280,930&width=1440&height=600"},
          {color:"blue",image:"https://nafta.starconnect-ce.i.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZUVvZbMw3SGtlaMtsd2HdcUfpOyXGEuTRJ0lVYrOB2qB5bApRTyI5uGoYQC30MQkzNBUum7jAymhKV5pV%25vq4tTyLRgLFYaxPrqrH1GBfn8w0TfoiZKbYM4Fv4lTg9LxZ6PDaSbSeWHthtsd8BQcUfiA1XGE5YrJbXSqxVc4n8wzhfoiZCqGM4FN8cTg9Pze6PDecNSeWswhtsdUcDcUaqKDTb32VXq0Y3If3f%25XEd9BBpxb1loE1JnwxV4V%25d%25CWLH59zW0uBgGgHaxPKL1I&&BKGND=15&IMGT=A27&POV=be040%2Cpzm&crop=640,130,1280,930&width=1440&height=600"}
        ]
      },
      {
        name: "GLS 600 SUV",
        mainImg:
          "https://www.autotrader.com/wp-content/uploads/2021/09/2022-mercedes-maybach-gls600-front-left.jpg?w=1068&h=0&crop=1",
        option1: [
          {color:"black",image:"https://nafta.starconnect-ce.i.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq4EFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtle2tsd2vdcUfp86XGEuiXJ0l34xOB2NQcbApjkoI5uVfuQC3qE7kzNRJ9m7jxafhKVFSE%25vq9vTyLRDiXYax7XSrH1KJ%25n8wv8noiZL7gM4FaSMTg9HtV6PD8%25oSeWiyStsd4ZtcUfgXyXGEP5jJ0l7YVOB2Kr%25bApvAbI5uLmIQC3akrkzNHmbm7j8hfhKVkYF%25vqevZyLRsGWYaxU5ErH1zJ%25n8w78coiZK6EM4FvyFTg9LYe6PDaSmSeWH0utsd8BxcUfiAWXGEWymJ0ldYtOB2frObAp7ACI5uKMTQmIJwF1bs6PDLLbSeWgeRtsdPv3cUfeLkXGEs9EJ0lUr6OB2ZWObAp5AXI5uC5uQC3zCTkzN7Uum7jK2ohKVv%25F%25vGdeNQnF1WydGBU4qLqtyRV3HHwEnlxbRlYO2EW5WtVt4jU0i3gjaZHCLC0GEzeUlo&&BKGND=12&IMGT=A27&POV=be040%2Cpzm&crop=640,130,1280,930&width=1440&height=600"},
          {color:"white",image:"https://nafta.starconnect-ce.i.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq4EFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtle2tsd2vdcUfp86XGEuiXJ0l34xOB2NQcbApjkoI5uVfuQC3qE7kzNRJ9m7jxafhKVFSE%25vq9vTyLRDiXYax7XSrH1KJ%25n8wv8noiZL7gM4FaSMTg9HtV6PD8%25oSeWiyStsd4ZtcUfgXyXGEP5jJ0l7YVOB2Kr%25bApvAbI5uLmIQC3akrkzNHmbm7j8hfhKVkYF%25vqevZyLRsGWYaxU5ErH1zJ%25n8w78coiZK6EM4FvyFTg9LYe6PDaSmSeWH0utsd8BxcUfiAWXGEWymJ0ldYtOB2frObAp7ACI5uKMTQmIJwF1bs6PDLLbSeWgeRtsdPv3cUfeLkXGEs9EJ0lUr6OB2ZWObAp5AXI5uC5uQC3zCTkzN7Uum7jK2ohKVv%25F%25vGdeNQnF1WydGBU4qLqtyRV3HHwEnlxbRlYO2EW5WtVt4jU0i3gjaZHCLC0GEzeUlo&&BKGND=12&IMGT=A27&POV=be040%2Cpzm&crop=640,130,1280,930&width=1440&height=600"},
          {color:"red",image:"https://nafta.starconnect-ce.i.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq4EFqtyO67PobzIr3eWsrrCsdRRzwQZUkIZbMw3SGtle2tsd2vdcUfp86XGEuiXJ0l34xOB2NQcbApjkoI5uVfuQC3qE7kzNRJ9m7jxafhKVFSE%25vq9vTyLRDiXYax7XSrH1KJ%25n8wv8noiZL7gM4FaSMTg9HtV6PD8%25oSeWiyStsd4ZtcUfgXyXGEP5jJ0l7YVOB2Kr%25bApvAbI5uLmIQC3akrkzNHmbm7j8hfhKVkYF%25vqevZyLRsGWYaxU5ErH1zJ%25n8w78coiZK6EM4FvyFTg9LYe6PDaSmSeWH0utsd8BxcUfiAWXGEWymJ0ldYtOB2frObAp7ACI5uKMTQmIJwF1bs6PDLLbSeWgeRtsdPv3cUfeLkXGEs9EJ0lUr6OB2ZWObAp5AXI5uC5uQC3zCTkzN7Uum7jK2ohKVv%25F%25vGdeNQnF1WydGBU4qLqtyRV3HHwEnlxbRlYO2EW5WtVt4jU0i3gjaZHCLC0GEzeUlo&&BKGND=12&IMGT=A27&POV=be040%2Cpzm&crop=640,130,1280,930&width=1440&height=600"},
          {color:"blue",image:"https://nafta.starconnect-ce.i.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq4EFqtyO67PobzIr3eWsrrCsdRRzwQZ6kvZbMw3SGtle2tsd2vdcUfp86XGEuiXJ0l34xOB2NQcbApjkoI5uVfuQC3qE7kzNRJ9m7jxafhKVFSE%25vq9vTyLRDiXYax7XSrH1KJ%25n8wv8noiZL7gM4FaSMTg9HtV6PD8%25oSeWiyStsd4ZtcUfgXyXGEP5jJ0l7YVOB2Kr%25bApvAbI5uLmIQC3akrkzNHmbm7j8hfhKVkYF%25vqevZyLRsGWYaxU5ErH1zJ%25n8w78coiZK6EM4FvyFTg9LYe6PDaSmSeWH0utsd8BxcUfiAWXGEWymJ0ldYtOB2frObAp7ACI5uKMTQmIJwF1bs6PDLLbSeWgeRtsdPv3cUfeLkXGEs9EJ0lUr6OB2ZWObAp5AXI5uC5uQC3zCTkzN7Uum7jK2ohKVv%25F%25vGdeNQnF1WydGBU4qLqtyRV3HHwEnlxbRlYO2EW5WtVt4jU0i3gjaZHCLC0GEzeUlo&&BKGND=12&IMGT=A27&POV=be040%2Cpzm&crop=640,130,1280,930&width=1440&height=600"}
        ]
      },
      {
        name: "Maybach S 680 4MATIC",
        mainImg:
          "https://www.motortrend.com/uploads/sites/5/2021/07/2022-Mercedes-Maybach-S680-4Matic-31.jpg?fit=around%7C875:492",
        option1: [
          {color:"black",image:"https://nafta.starconnect-ce.i.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqbSFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtle2tsd2vtcUfp86XGEuiXJ0l34AOB2NQnbApjtwI5uVczQC3qkOkzNRLkm7jxafhKVFSM%25vq9tkyLRDcHYaxWa8rH1dBtn8wfAyoiZEkXM4FaIJTg9HQn6PD8ksSeWieStsd4HTcUfg8yXGEPbXJ0leIxOB2sQFbApUTyI5uG6JQC30SQkzNHTnm7j86mhKViYF%25vq4r%25yLRg36YaxPNhrH1en%25n8wso3oiZUIYM4FGOrTg9o6p6PDCPlSeWzKRtsd7vNcUfK8qXGEvTVJ0lLOqOB2PrcbApeAyI5us6JQC3US3kzNGlum7j0OjhKVBbN%25vqAyTyLR5YXYaxC4SrH1zgRn8wRO4oiZxbNM4F1SrTg9UQ36PDGmhSc6o3juTa%25vqBBlyLR0GJYaxv0SrH1LIrn8wuVcoiZ4bNM4Fg4FTg9Pgk6PDe7NSeWsajtsdUZQcUaqKDTb32VXq0hVCZqf%25XEd9BBpxb1loE1JnwxV4V%25d%25CWLH59zW0uBgGgHaxPKL1I&&BKGND=12&IMGT=A27&POV=be040%2Cpzm&crop=640,130,1280,930&width=1440&height=600"},
          {color:"red",image:"https://nafta.starconnect-ce.i.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqbSFqtyO67PobzIr3eWsrrCsdRRzwQZUkwZbMw3SGtle2tsd2vtcUfp86XGEuiXJ0l34AOB2NQnbApjtwI5uVczQC3qkOkzNRLkm7jxafhKVFSM%25vq9tkyLRDcHYaxWa8rH1dBtn8wfAyoiZEkXM4FaIJTg9HQn6PD8ksSeWieStsd4HTcUfg8yXGEPbXJ0leIxOB2sQFbApUTyI5uG6JQC30SQkzNHTnm7j86mhKViYF%25vq4r%25yLRg36YaxPNhrH1en%25n8wso3oiZUIYM4FGOrTg9o6p6PDCPlSeWzKRtsd7vNcUfK8qXGEvTVJ0lLOqOB2PrcbApeAyI5us6JQC3US3kzNGlum7j0OjhKVBbN%25vqAyTyLR5YXYaxC4SrH1zgRn8wRO4oiZxbNM4F1SrTg9UQ36PDGmhSc6o3juTa%25vqBBlyLR0GJYaxv0SrH1LIrn8wuVcoiZ4bNM4Fg4FTg9Pgk6PDe7NSeWsajtsdUZQcUaqKDTb32VXq0hVCZqf%25XEd9BBpxb1loE1JnwxV4V%25d%25CWLH59zW0uBgGgHaxPKL1I&&BKGND=12&IMGT=A27&POV=be040%2Cpzm&crop=640,130,1280,930&width=1440&height=600"},
          {color:"blue",image:"https://nafta.starconnect-ce.i.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqbSFqtyO67PobzIr3eWsrrCsdRRzwQZhkHZbMw3SGtle2tsd2vtcUfp86XGEuiXJ0l34AOB2NQnbApjtwI5uVczQC3qkOkzNRLkm7jxafhKVFSM%25vq9tkyLRDcHYaxWa8rH1dBtn8wfAyoiZEkXM4FaIJTg9HQn6PD8ksSeWieStsd4HTcUfg8yXGEPbXJ0leIxOB2sQFbApUTyI5uG6JQC30SQkzNHTnm7j86mhKViYF%25vq4r%25yLRg36YaxPNhrH1en%25n8wso3oiZUIYM4FGOrTg9o6p6PDCPlSeWzKRtsd7vNcUfK8qXGEvTVJ0lLOqOB2PrcbApeAyI5us6JQC3US3kzNGlum7j0OjhKVBbN%25vqAyTyLR5YXYaxC4SrH1zgRn8wRO4oiZxbNM4F1SrTg9UQ36PDGmhSc6o3juTa%25vqBBlyLR0GJYaxv0SrH1LIrn8wuVcoiZ4bNM4Fg4FTg9Pgk6PDe7NSeWsajtsdUZQcUaqKDTb32VXq0hVCZqf%25XEd9BBpxb1loE1JnwxV4V%25d%25CWLH59zW0uBgGgHaxPKL1I&&BKGND=12&IMGT=A27&POV=be040%2Cpzm&crop=640,130,1280,930&width=1440&height=600"},
          {color:"rgba(86,50,57,255)",image:"https://nafta.starconnect-ce.i.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqbSFqtyO67PobzIr3eWsrrCsdRRzwQZxevZbMw3SGtle2tsd2vtcUfp86XGEuiXJ0l34AOB2NQnbApjtwI5uVczQC3qkOkzNRLkm7jxafhKVFSM%25vq9tkyLRDcHYaxWa8rH1dBtn8wfAyoiZEkXM4FaIJTg9HQn6PD8ksSeWieStsd4HTcUfg8yXGEPbXJ0leIxOB2sQFbApUTyI5uG6JQC30SQkzNHTnm7j86mhKViYF%25vq4r%25yLRg36YaxPNhrH1en%25n8wso3oiZUIYM4FGOrTg9o6p6PDCPlSeWzKRtsd7vNcUfK8qXGEvTVJ0lLOqOB2PrcbApeAyI5us6JQC3US3kzNGlum7j0OjhKVBbN%25vqAyTyLR5YXYaxC4SrH1zgRn8wRO4oiZxbNM4F1SrTg9UQ36PDGmhSc6o3juTa%25vqBBlyLR0GJYaxv0SrH1LIrn8wuVcoiZ4bNM4Fg4FTg9Pgk6PDe7NSeWsajtsdUZQcUaqKDTb32VXq0hVCZqf%25XEd9BBpxb1loE1JnwxV4V%25d%25CWLH59zW0uBgGgHaxPKL1I&&BKGND=12&IMGT=A27&POV=be040%2Cpzm&crop=640,130,1280,930&width=1440&height=600"}
        ]
      }
    ]
  },
  {
    brand: "bentley",
    logoImg:
      "https://audimediacenter-a.akamaihd.net/system/production/media/28400/images/8e25f6bd8579b61c1051a52650813ebf676313dc/A160053_full.jpg?1582245503",
    mainImg:
      "https://www.bentleymotors.com/content/dam/bentley/Master/Models/derivative-strategy-/flying-spur/flying-spur-mulliner/Hero%201920x960%20front%203.4%20Flying%20Spur%20Mulliner.jpg/_jcr_content/renditions/original.image_file.1920.960.file/Hero%201920x960%20front%203.4%20Flying%20Spur%20Mulliner.jpg",
    models: [
      {
        name: "Flying Spur",
        mainImg: "https://hips.hearstapps.com/hmg-prod/images/flying-spur-s-1-1656086344.jpg?crop=0.736xw:0.829xh;0.0782xw,0.149xh&resize=640:*",
        option1: [
          {color:"rgba(55,49,82,255)",image:"images/Bentley-Super/screen1.png"},
          {color:"rgba(84,84,59,255)",image:"images/Bentley-Super/screen2.png"},
          {color:"red",image:"images/Bentley-Super/screen3.png"},
          {color:"rgba(41,103,120,255)",image:"images/Bentley-Super/screen4.png"}
        ]
      },
      {
        name: "GT",
        mainImg:
          "https://www.motortrend.com/uploads/2022/12/2023-Bentley-Continental-GT-Mulliner-exterior-2.jpg?fit=around%7C875:492.1875",
        option1: [
          {color:"rgba(55,49,82,255)",image:"images/GT/screen5.png"},
          {color:"rgba(192,185,171,255)",image:"images/GT/screen6.png"},
          {color:"red",image:"images/GT/screen7.png"},
          {color:"rgba(41,103,120,255)",image:"images/GT/screen8.png"}
        ]
      },
      {
        name: "Bentayga",
        mainImg:
          "https://www.topgear.com/sites/default/files/2021/07/Bentayga%20Hybrid%20-%20Dragon%20Red%20-%202.jpg?w=1952&h=1098",
        option1: [
          {color:"blue",image:"images/Bentayga/screen9.png"},
          {color:"rgba(55,49,82,255)",image:"images/Bentayga/screen10.png"},
          {color:"rgba(96,96,96,255)",image:"images/Bentayga/screen11.png"},
          {color:"rgba(53,14,16,255)",image:"images/Bentayga/screen12.png"}
        ]
      }
    ]
  }
];



