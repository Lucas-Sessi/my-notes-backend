import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { UserEntity } from '../../user/model/entities/user.entity';
import { AtivoInvestimento } from '../../ativo_investimento/entities/ativo_investimento.entity';

@Entity('ativo_usuario')
export class AtivoUsuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', nullable: false })
  id_usuario: number;

  @Column({ type: 'integer', nullable: false })
  id_ativo: number;

  @Column({ type: 'float4' })
  preco_medio: number;

  @Column({ type: 'int' })
  qtd_cateira: number;

  @Column({ type: 'integer', nullable: false })
  nota_ativo: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dt_criacao: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dt_atualizacao: Date;
}
